import type { PaletteDto } from '../../../dtos/palette.dto';

export default defineCachedEventHandler(async (event): Promise<PaletteDto> => {
  const params = await modules.palette.validation.getInputParams(event);
  const response = await modules.palette.service.getById(parseInt(params.id));

  return response;
}, { maxAge: 60 * 60 });