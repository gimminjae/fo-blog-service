import { api } from '~/core/api/api'

const member = {
    signUp(data) {
        return api.post('/api/member', data)
    },
    signIn(data) {
        return api.get('/api/member/sign-in', data)
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
    }
}
export default member