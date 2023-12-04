import { api } from '~/core/api/api'

const post = {
    save(data) {
        return api.post('/api/post', data)
    },
    saveTmp(data) {
        return api.post('/api/post/tmp', data)
    },
    modify(data) {
        return api.put('/api/post', data)
    },
    delete(postId) {
        const paramData = {
            postId: postId
        }
        return api.remove('/api/post', paramData)
    },
    getById(postId) {
        return api.get(`/api/post/${postId}`)
    },
    getByMember(nickname) {
        const paramData = {
            nickname: nickname
        }
        return api.get('/api/post/nickname', paramData)
    },
    getBySeries() {

    }
}
export default post