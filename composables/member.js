import { api } from '~/core/api/api'

const member = {
    signUp(data) {
        return api.post('/api/member', data)
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
    }
}
export default member