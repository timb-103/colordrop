/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useQuery, useInfiniteQuery } from '@tanstack/vue-query';
import type { CreatePaletteLikeInputDto, DeletePaletteLikeInputDto, GetColorsDto, ListPaletteDto, ListPaletteInputDto } from '../server/dtos/palette.dto';
import type { PaletteModel } from '../models/palette.model';

const PALETTE_ROOT_KEY = 'palette';

export function usePalette(id: Ref<string | undefined>) {
  return useQuery({
    queryKey: [PALETTE_ROOT_KEY, id],
    queryFn: async () => {
      return await $fetch<PaletteModel>(`/api/palettes/${id.value}`, {
        method: 'GET'
      });
    }
  });
}

export interface ListPaletteFilterParams {
  tags?: string[]
  ids?: string[]
  query?: string
}

export function useListPalettes(size: number, filter: ComputedRef<ListPaletteFilterParams | undefined>) {
  return useInfiniteQuery({
    queryKey: [PALETTE_ROOT_KEY, size, filter],
    queryFn: async ({ pageParam: page = 0 }) => {
      const query: ListPaletteInputDto = {
        page: page.toString(),
        size: size?.toString(),
        tags: filter.value?.tags?.join(','),
        ids: filter.value?.ids?.join(','),
        query: filter.value?.query
      };

      return await $fetch<ListPaletteDto>('/api/palettes', {
        method: 'GET',
        query
      });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (lastPage.items.length < size) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    getPreviousPageParam: (_firstPage, _allPages, firstPageParam) => {
      if (firstPageParam <= 1) {
        return undefined;
      }
      return firstPageParam - 1;
    }
  });
}

export function useOptimisticCreatePaletteLike() {
  return useOptimisticMutation({
    queryKey: [PALETTE_ROOT_KEY],
    mutationFn: async (params: CreatePaletteLikeInputDto) => {
      await $fetch(`/api/palettes/${params.id}/like`, {
        method: 'PUT'
      });
    },
    updateQueryFn: (params: CreatePaletteLikeInputDto, old?: ListPaletteDto) => {
      if (old === undefined) {
        return undefined;
      }

      return {
        items: old.items.map((item) => ({
          ...item,
          likesCount: item.id === parseInt(params.id) ? item.likesCount + 1 : item.likesCount
        }))
      };
    }
  });
}

export function useOptimisticDeletePaletteLike() {
  return useOptimisticMutation({
    queryKey: [PALETTE_ROOT_KEY],
    mutationFn: async (params: DeletePaletteLikeInputDto) => {
      await $fetch(`/api/palettes/${params.id}/like`, {
        method: 'DELETE'
      });
    },
    updateQueryFn: (params: DeletePaletteLikeInputDto, old?: ListPaletteDto) => {
      if (old === undefined) {
        return undefined;
      }

      return {
        items: old.items.map((item) => ({
          ...item,
          likesCount: item.id === parseInt(params.id) ? item.likesCount - 1 : item.likesCount
        }))
      };
    }
  });
}

export function useColors() {
  return useQuery({
    queryKey: [PALETTE_ROOT_KEY, 'colors'],
    queryFn: async () => {
      const response = await $fetch<GetColorsDto>('/api/palettes/colors', {
        method: 'GET'
      });

      return response.items;
    }
  });
}
