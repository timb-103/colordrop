export default defineNuxtConfig({
  runtimeConfig: {
    mongo: {
      url: process.env.MONGO_URL ?? 'mongodb://colordrop:secret@localhost:27019/colordrop?authSource=admin'
    }
  }
});
