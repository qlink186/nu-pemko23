export default defineNuxtRouteMiddleware((to, from) => {
  let userAgent = process.server
      ? useRequestHeaders()["user-agent"]
      : navigator.userAgent
  to.params.isMobile = String(/mobile/i.test(userAgent))
  })