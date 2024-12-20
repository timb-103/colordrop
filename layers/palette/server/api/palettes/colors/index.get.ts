import type { GetColorsDto } from '../../../dtos/palette.dto';

export default defineCachedEventHandler(async (): Promise<GetColorsDto> => {
  const response = await modules.palette.service.getColorNames();

  return {
    items: response
  };
}, { maxAge: 60 * 60 });
