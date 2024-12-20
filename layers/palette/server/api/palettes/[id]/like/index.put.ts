export default defineEventHandler(async (event) => {
  const params = await modules.palette.validation.getCreateLikeInputParams(event);

  await modules.palette.service.likeById(parseInt(params.id));

  setResponseStatus(event, 201);
});
