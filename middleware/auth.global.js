import cookieUtil from "~/composables/cookie";
import axios from "axios";
import router from "~/composables/router"

const signIn = '/member/sign-in'
const signUp = '/member/sign-up'
export default defineNuxtRouteMiddleware(async (to, from) => {
    const nuxt = useNuxtApp()
    console.log('auth : ', to.fullPath)
    // 권한을 검사할 조건
    if (to.fullPath.startsWith(signIn) || to.fullPath.startsWith(signUp)) {
        if (cookieUtil.getAccessToken() || cookieUtil.getRefreshToken()) {
            return navigateTo(nuxt.$localPath('/'))
        }
    }
    if (!to.fullPath.startsWith('/login/adminLogin') && !to.fullPath.startsWith('/guide')) {
        // not logined => redirect login page
        if (!cookieUtil.getAccessToken()) {
            if (!cookieUtil.getRefreshToken()) {
                // router.replace({ path: '/member/sign-in' })
            } else {
                const { data } = await axios.get(`/api/member/access-token?refreshToken=${cookieUtil.getRefreshToken()}`)
                cookieUtil.setAccessToken(data)
            }
        }
    }
})
