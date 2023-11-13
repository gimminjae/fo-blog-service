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