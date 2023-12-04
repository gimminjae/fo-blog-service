import toastAlert from "~/composables/toast";

const routes = {
    alertRouteQuery: () => {
        const query = useRoute().query
        if (query.message == null) return
        if (query.type === 'success') {
            toastAlert.success(query.message)
        } else if (query.type === 'info') {
            toastAlert.info(query.message)
        } else if (query.type === 'warn') {
            toastAlert.warn(query.message)
        } else if (query.type === 'error') {
            toastAlert.error(query.message)
        }
    },
    getQuery: () => {
        return useRoute().query
    }
}

export default routes