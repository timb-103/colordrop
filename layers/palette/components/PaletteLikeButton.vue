<template>
  <ClientOnly>
    <UButton
      :size="size"
      leading-icon="i-heroicons-heart"
      :label="likesCount.toString()"
      :color="isLiked ? 'primary' : 'white'"
      @click.prevent="isLiked ? unlike() : like()"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
import { StorageSerializers, useLocalStorage } from '@vueuse/core';
import type { PaletteModel } from '../models/palette.model';
import { PlausibleEventName } from '~/layers/plausible/types';

export interface Props {
  id: PaletteModel['id']
  size: 'xs' | 'sm' | 'lg' | 'xl'
  likesCount: number
}

const props = withDefaults(defineProps<Props>(), {
  size: 'sm'
});

const { mutate: createLike } = useOptimisticCreatePaletteLike();
const { mutate: deleteLike } = useOptimisticDeletePaletteLike();

const session = useLocalStorage<string>(
  'likeColors',
  '',
  { serializer: StorageSerializers.string }
);

const isLiked = computed(() => {
  const existingIds = session.value !== '' ? session.value.split(',').filter(v => v) : [];
  return existingIds.includes(props.id.toString());
});

function like(): void {
  const existingIds = session.value !== '' ? session.value.split(',').filter(v => v) : [];

  if (!existingIds.includes(props.id.toString())) {
    existingIds.push(props.id.toString());
  }

  session.value = existingIds.join(',');

  createLike({ id: props.id.toString() });

  sendPlausibleEvent(PlausibleEventName.LIKE_BUTTON_CLICKED);
}

function unlike(): void {
  const existingIds = session.value !== '' ? session.value.split(',').filter(Boolean) : [];

  session.value = existingIds.filter(v => v !== props.id.toString()).join(',');

  deleteLike({ id: props.id.toString() });
}
</script>
