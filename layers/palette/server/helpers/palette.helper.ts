import type { PaletteDto } from '../dtos/palette.dto';
import type { PaletteEntity } from '../entities/palette.entity';

export function mapPaletteEntityToDto(entity: PaletteEntity): PaletteDto {
  return {
    id: entity.id,
    colors: entity.colors,
    tags: entity.tags,
    name: entity.name,
    description: entity.description,
    likesCount: entity.likesCount,
    createdAt: entity.createdAt
  };
}
