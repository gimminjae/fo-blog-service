// eslint-disable-next-line no-undef
export default defineNuxtRouteMiddleware((to, from) => {
  console.log('auth : ', to.fullPath)
  // 권한을 검사할 조건
  if (!to.fullPath.startsWith('/login/adminLogin') && !to.fullPath.startsWith('/guide')) {
    // eslint-disable-next-line no-undef
    // not logined => redirect login page
    if (!useCookie('accessToken').value) {
      // eslint-disable-next-line no-undef
      return navigateTo(`/member/sign-in`)
    }
  }
})
