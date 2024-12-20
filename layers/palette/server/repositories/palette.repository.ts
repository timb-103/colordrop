import { type Collection, type Filter, type OptionalUnlessRequiredId, type Sort } from 'mongodb';
import type { CreatablePaletteEntity, PaletteEntity } from '../entities/palette.entity';

export class PaletteRepository {
  constructor(private readonly collection: Collection<PaletteEntity>) {}

  public async setup(): Promise<void> {
    await this.collection.createIndexes([{
      key: { createdAt: -1 }
    }, {
      key: { createdAt: -1, likesCount: -1 }
    }, {
      key: { likesCount: -1, createdAt: -1 }
    }, {
      key: { tags: 1 }
    }, {
      key: { id: -1 }
    }, {
      key: { likesCount: -1 }
    }, {
      key: { tags: 1, createdAt: -1 }
    }], { background: true });
  }

  public async list(page: number, size: number, filter: Filter<PaletteEntity>, sort: Sort): Promise<PaletteEntity[]> {
    return await this.collection.find(filter)
      .sort(sort)
      .skip(page * size)
      .limit(size)
      .toArray();
  }

  public async getById(id: PaletteEntity['id']): Promise<PaletteEntity | null> {
    return await this.collection.findOne({ id });
  }

  public async create(entity: CreatablePaletteEntity): Promise<PaletteEntity> {
    const { insertedId } = await this.collection.insertOne(entity as OptionalUnlessRequiredId<PaletteEntity>);

    return {
      _id: insertedId,
      ...entity
    };
  }

  public async addLike(id: PaletteEntity['id']): Promise<void> {
    await this.collection.updateOne({ id }, {
      $inc: {
        likesCount: 1
      }
    });
  }

  public async deleteLike(id: PaletteEntity['id']): Promise<void> {
    await this.collection.updateOne({ id }, {
      $inc: {
        likesCount: -1
      }
    });
  }

  public async getColorNames(): Promise<string[]> {
    const result = await this.collection.aggregate([
      { $unwind: '$colors' },
      { $project: { _id: 0, colorName: '$colors.name', tags: 1 } },
      {
        $group: {
          _id: null,
          colorNames: { $addToSet: '$colorName' },
          tags: { $first: '$tags' }
        }
      },
      {
        $project: {
          _id: 0,
          allColorNames: { $setUnion: ['$colorNames', '$tags'] }
        }
      }
    ]).toArray();

    return result[0]?.allColorNames ?? [];
  }
}
