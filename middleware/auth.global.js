import cookieUtil from "~/composables/cookie";
import axios from "axios";

const signIn = '/member/sign-in'
const signUp = '/member/sign-up'
async function regenAccessToken() {
    const { data } = await axios.get(`/api/member/access-token?refreshToken=${cookieUtil.getRefreshToken()}`)
    cookieUtil.setAccessToken(data)
    return data
}
async function setMemberAtVuex(member) {
    console.log(member)
}
export default defineNuxtRouteMiddleware(async (to, from) => {
    const nuxt = useNuxtApp()
    console.log('auth : ', to.fullPath)
    let navigate
    // 권한을 검사할 조건
    if (to.fullPath.startsWith(signIn) || to.fullPath.startsWith(signUp)) {
        if (cookieUtil.getAccessToken() || cookieUtil.getRefreshToken()) {
            navigate = nuxt.$localPath('/')
        }
    }
    if (!to.fullPath.startsWith('/login/adminLogin') && !to.fullPath.startsWith('/guide')) {
        // not logined => redirect login page
        if (!cookieUtil.getAccessToken()) {
            if (!cookieUtil.getRefreshToken()) {
                // router.replace({ path: '/member/sign-in' })
            } else {
                cookieUtil.setAccessToken(regenAccessToken())
            }
        }
    }
    // await getMe()
    if (navigate) {
        return navigateTo(navigate)
    }
})
