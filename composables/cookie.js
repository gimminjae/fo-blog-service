import { useCookie } from '#app'

const cookieUtil = {
    set(key, value) {
        const cookie = useCookie(key)
        cookie.value = value
    },
    setWithMaxAge(key, value, maxAge) {
        const cookie = useCookie(key, { maxAge: maxAge })
        cookie.value = value
    },
    setAccessToken(value) {
        this.setWithMaxAge('accessToken', value, 5*60) // 5 minute
    },
    setRefreshToken(value) {
        this.setWithMaxAge('refreshToken', value, 14*24*60*60) // 2 weeks
    },
    getAccessToken() {
        return this.get('accessToken')
    },
    getRefreshToken() {
        return this.get('refreshToken')
    },
    get(key) {
        const cookie = useCookie(key).value

        if (this.isStringValid(cookie)) {
            return cookie
        } else {
            return ''
        }
    },
    isStringValid(str) {
        if (str === null || str === undefined || str.length === 0) {
            return false
        }
        return true
    },
    remove(key) {
        useCookie(key).value = null
    }
}

export default cookieUtil