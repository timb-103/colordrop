export default defineTask({
  async run() {
    await modules.palette.service.create();
    await useStorage('cache').clear();

    return { result: 'Success' };
  }
});
