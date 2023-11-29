import cookieUtil from "~/composables/cookie";
import axios from "axios";

const unknown = [
    '/member/sign-in',
    '/member/sign-up'
]
async function regenAccessToken() {
    const { data } = await axios.get(`/api/member/access-token?refreshToken=${cookieUtil.getRefreshToken()}`)
    cookieUtil.setAccessToken(data)
    console.log('data: ', data)
    return data
}
async function setMemberAtVuex(member) {
    console.log(member)
}
export default defineNuxtRouteMiddleware(async (to, from) => {
    const nuxt = useNuxtApp()
    console.log('auth : ', to.fullPath)
    // 권한을 검사할 조건
    if (unknown.includes(to.fullPath)) {
        if (cookieUtil.getAccessToken() || cookieUtil.getRefreshToken()) {
            return navigateTo(nuxt.$localPath('/'))
        }
    }
    if (!to.fullPath.startsWith('/login/adminLogin') && !to.fullPath.startsWith('/guide')) {
        // not logined => redirect login page
        if (!cookieUtil.getAccessToken()) {
            if (!cookieUtil.getRefreshToken()) {
                console.log('no logined')
                return navigateTo(nuxt.$localPath('/member/sign-in'))
            } else {
                const accessToken = await regenAccessToken()
                cookieUtil.setAccessToken(accessToken)
            }
        }
    }
})
