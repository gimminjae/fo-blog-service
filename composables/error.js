import toastAlert from '~/composables/toast'

const handleError = {
    apiError(error) {
        error.response.data.errors.forEach(errorMsg => toastAlert.warn(errorMsg))
    }
}
export default handleError