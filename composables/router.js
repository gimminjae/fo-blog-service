const router = {
    replace: (data) => {
        useRouter().replace(data)
    },
    push: (data) => {
        useRouter().push(data)
    },
    param: (data) => {
        return useRouter().getRoutes(data)
    },
    getCurrentRoute: () => {
        return useRouter().currentRoute
    },
    getQuery: () => {
        return useRouter().currentRoute.value.query
    }
}

export default router