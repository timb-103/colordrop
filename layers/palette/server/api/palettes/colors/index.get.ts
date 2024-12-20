import type { GetColorsDto } from '../../../dtos/palette.dto';

export default defineEventHandler(async (): Promise<GetColorsDto> => {
  const response = await modules.palette.service.getColorNames();

  return {
    items: response
  };
});
