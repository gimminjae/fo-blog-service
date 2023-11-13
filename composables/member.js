import { api } from '~/core/api/api'

const member = {
    signUp(data) {
        return api.post('/api/member', data)
    }
}
export default member