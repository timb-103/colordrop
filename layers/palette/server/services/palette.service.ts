import { type Filter, type Sort } from 'mongodb';
import type { ListPaletteDto, PaletteDto } from '../dtos/palette.dto';
import { getCategorizePalettePrompt, getDescribePalettePrompt, getHexPalettePrompt, getNamePalettePrompt, mapPaletteEntityToDto } from '../helpers/palette.helper';
import type { PaletteRepository } from '../repositories/palette.repository';
import type { PaletteEntity } from '../entities/palette.entity';
import ntc from '../../utils/ntc.util';
import type { AIService } from '~/layers/ai/server/services/ai.service';

export interface ListPaletteFilterParams {
  tags?: string[]
  ids?: string[]
  query?: string
}

export class PaletteService {
  constructor(
    private readonly repository: PaletteRepository,
    private readonly aiService: AIService
  ) {}

  public async list(page: number, size: number, filter: ListPaletteFilterParams): Promise<ListPaletteDto> {
    let colFilter: Filter<PaletteEntity> = {};
    const sort: Sort = { createdAt: -1 };

    if (filter.tags !== undefined && filter.tags.length > 0) {
      colFilter.tags = {
        $in: filter.tags
      };
    }

    /** @description overwrite tags filters if query present */
    if (filter.query !== undefined) {
      const words = filter.query.split(/\s+/);

      const wordQueries = words.map(word => ({
        $or: [
          { tags: { $regex: new RegExp(word, 'i') } }, // Match in tags array
          { 'colors.name': { $regex: new RegExp(word, 'i') } } // Match in colors.name
        ]
      }));

      colFilter = { $or: wordQueries };
    }

    /** @description overwrite all filters if ids present */
    if (filter.ids !== undefined && filter.ids.length > 0) {
      colFilter = {
        id: { $in: filter.ids.map(v => parseInt(v)) }
      };
    }

    const entities = await this.repository.list(page, size, colFilter, sort);

    return {
      items: entities.map(entity => mapPaletteEntityToDto(entity))
    };
  }

  public async getById(id: PaletteEntity['id']): Promise<PaletteDto> {
    const entity = await this.repository.getById(id);
    if (entity === null) {
      throw createError({ statusCode: 404 });
    }

    return mapPaletteEntityToDto(entity);
  }

  public async likeById(id: PaletteEntity['id']): Promise<void> {
    await this.repository.addLike(id);
  }

  public async deleteLikeById(id: PaletteEntity['id']): Promise<void> {
    await this.repository.deleteLike(id);
  }

  public async getColorNames(): Promise<string[]> {
    return (await this.repository.getColorNames()).sort((a, b) => a.localeCompare(b));
  }

  public async create(): Promise<PaletteDto> {
    const hexPaletteResponse = await this.aiService.getByPrompt(getHexPalettePrompt());
    const hexPalette = hexPaletteResponse[0]
      .split(',')
      .map(color => color.trim());

    const [name] = await this.aiService.getByPrompt(getNamePalettePrompt(hexPalette));
    const categories = await this.aiService.getByPrompt(getCategorizePalettePrompt(hexPalette));
    const [description] = await this.aiService.getByPrompt(getDescribePalettePrompt(hexPalette));

    const colors = hexPalette.map(v => ({
      hex: v,
      name: ntc.name(v)[1]
    }));

    const tags = categories[0].split(',').map(v => v.trim());

    const lastId = await this.repository.getLastId();
    const entity = await this.repository.create({
      id: lastId + 1,
      colors,
      description,
      tags,
      name,
      createdAt: new Date(),
      likesCount: 0
    });

    return mapPaletteEntityToDto(entity);
  }
}
