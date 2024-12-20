/** @description required as we are changing URL structure after acquiring */
export default defineEventHandler(async (event) => {
  const url = getRequestURL(event);
  const pathname = url.pathname;
  const searchParams = url.searchParams;

  if (pathname === '/palette/' && searchParams.has('id')) {
    const id = searchParams.get('id');
    await sendRedirect(event, `/palette/${id}`, 301);
  }

  if (pathname === '/search/' && searchParams.has('s')) {
    const s = searchParams.get('s');
    await sendRedirect(event, `/colors/${s}`, 301);
  }
});
