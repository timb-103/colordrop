import { type Static, Type } from '@sinclair/typebox';

export const PaletteDtoSchema = Type.Object({
  id: Type.Number(),
  colors: Type.Array(Type.Object({
    name: Type.String(),
    hex: Type.String()
  }), { maxItems: 4 }),
  name: Type.String(),
  description: Type.String(),
  tags: Type.Array(Type.String()),
  likesCount: Type.Number(),
  createdAt: Type.Date()
});

export type PaletteDto = Static<typeof PaletteDtoSchema>;

export const PaletteInputDtoSchema = Type.Object({
  id: Type.String()
});

export type PaletteInputDto = Static<typeof PaletteInputDtoSchema>;

export const ListPaletteInputDtoSchema = Type.Object({
  page: Type.String({ pattern: '^[0-9]+$' }),
  size: Type.Optional(Type.String({ pattern: '^[0-9]+$', maxLength: 3 })),
  tags: Type.Optional(Type.String({ maxLength: 500 })),
  ids: Type.Optional(Type.String({ maxLength: 500 })),
  query: Type.Optional(Type.String())
});

export type ListPaletteInputDto = Static<typeof ListPaletteInputDtoSchema>;

export const ListPaletteDtoSchema = Type.Object({
  items: Type.Array(PaletteDtoSchema)
});

export type ListPaletteDto = Static<typeof ListPaletteDtoSchema>;

export const CreatePaletteLikeInputDtoSchema = Type.Object({
  id: Type.String()
});

export type CreatePaletteLikeInputDto = Static<typeof CreatePaletteLikeInputDtoSchema>;

export const DeletePaletteLikeInputDtoSchema = Type.Object({
  id: Type.String()
});

export type DeletePaletteLikeInputDto = Static<typeof DeletePaletteLikeInputDtoSchema>;

export const GetColorsDtoSchema = Type.Object({
  items: Type.Array(Type.String())
});

export type GetColorsDto = Static<typeof GetColorsDtoSchema>;
