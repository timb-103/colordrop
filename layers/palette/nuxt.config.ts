export default defineNuxtConfig({
  runtimeConfig: {
    palette: {
      collectionName: process.env.PALETTE_COLLECTION_NAME ?? 'palettes'
    }
  },
  nitro: {
    scheduledTasks: {
      /** @description runs at midnight every night */
      '0 0 0 * * *': ['palette:create']
    }
  }
});
