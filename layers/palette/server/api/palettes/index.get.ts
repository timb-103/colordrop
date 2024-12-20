import type { ListPaletteDto } from '../../dtos/palette.dto';

export default defineEventHandler(async (event): Promise<ListPaletteDto> => {
  const query = await modules.palette.validation.getListInputQuery(event);

  /** @descritpion as its a get request we must parse some numbers */
  const page = parseInt(query.page);
  const size = parseInt(query.size ?? '20');
  const tags = query.tags?.split(',') ?? undefined;
  const ids = query.ids?.split(',') ?? undefined;
  const searchQuery = query.query ?? undefined;

  const response = await modules.palette.service.list(page, size, {
    tags,
    ids,
    query: searchQuery
  });

  return response;
});
