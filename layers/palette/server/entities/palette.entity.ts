import type { ObjectId } from 'mongodb';

export interface PaletteEntity {
  _id: ObjectId
  /** @deprecated this was from the sql migration so we don't break page url's */
  id: number
  tags: string[]
  colors: Array<{
    name: string
    hex: string
  }>
  description: string
  name: string
  likesCount: number
  createdAt: Date
}

export type CreatablePaletteEntity = Omit<PaletteEntity, '_id'>;
