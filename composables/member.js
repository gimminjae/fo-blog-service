import { api } from '~/core/api/api'
import cookieUtil from "~/composables/cookie";

const member = {
    signUp(data) {
        return api.post('/api/member', data)
    },
    signIn(data) {
        return api.get('/api/member/sign-in', data)
    },
    signOut() {
        return api.get('/api/member/sign-out')
    },
    checkDuplUsername(data) {
        const paramData = {
            username: data
        }
        return api.get('/api/member/username', paramData)
    },
    checkDuplNickname(data) {
        const paramData = {
            nickname: data
        }
        return api.get('/api/member/nickname', paramData)
    },
    getMe() {
        return api.get('/api/member')
    },
    regenerateAccessToken() {
        return api.get('/api/member/access-token', cookieUtil.getRefreshToken())
    },
    uploadProfileImage(data) {
        return api.post('/api/member/profile-image', data)
    }
}
export default member