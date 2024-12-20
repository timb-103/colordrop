<template>
  <div>
    <!-- loading skeletons -->
    <ul
      v-if="isFetching && !isRefetching && !isFetchingNextPage"
      class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
    >
      <li
        v-for="index in 50"
        :key="index"
      >
        <USkeleton class="h-28 w-full" />
      </li>
    </ul>

    <!-- palettes list-->
    <ul
      v-else
      class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
    >
      <li
        v-for="(item, index) in palettes"
        :key="index"
      >
        <PaletteButton :palette="item" />
      </li>
    </ul>

    <!-- load more button -->
    <div
      v-if="!isPaginationHidden && hasNextPage"
      class="text-center mt-8"
    >
      <UButton
        label="Load more"
        :loading="isFetching || isFetchingNextPage"
        @click="fetchNextPage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ListPaletteFilterParams } from '../composables/palette.composable';

export interface Props {
  tags: string[]
  ids?: string[]
  isFiltersHidden?: boolean
  isPaginationHidden?: boolean
  limit?: number
  query?: string
}

const props = withDefaults(defineProps<Props>(), {
  isFiltersHidden: false,
  isPaginationHidden: false,
  limit: 50,
  sortBy: undefined,
  ids: undefined,
  query: undefined
});

const listFilter = computed<ListPaletteFilterParams | undefined>(() => ({
  tags: props.tags.length > 0 ? props.tags : undefined,
  ids: props.ids,
  query: props.query
}));

const { data: list, isFetching, isRefetching, isFetchingNextPage, hasNextPage, fetchNextPage, suspense } = useListPalettes(props.limit, listFilter);

await suspense();

const palettes = computed(() => list.value?.pages.flatMap((items) => items.items) ?? []);
</script>
