export default defineEventHandler(async (event) => {
  const params = await modules.palette.validation.getDeleteLikeInputParams(event);

  await modules.palette.service.deleteLikeById(parseInt(params.id));

  setResponseStatus(event, 201);
});
