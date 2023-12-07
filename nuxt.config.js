// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt'
        // '@nuxtjs/axios',
        // '@nuxtjs/proxy'
    ],
    head: {
        title: 'My awesome project', // Other meta information
        script: [
            {
                src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL',
                crossorigin: 'anonymous'
            }
        ]
    },
    devtools: {enabled: true},
    vite: {
        server: {
            proxy: {
                "/api": {
                    target: "http://localhost:8080",
                    changeOrigin: true
                }
            }
        }
    },
    routeRules: {
        // prerender : 빌드 시 해당 경로를 사전 렌더링하고 정적 자산으로 빌드에 포함합니다.
        // '/': { prerender: true },
        // SSR을 비활성화하고 SPA(CSR) 전용으로 만듭니다.
        '/post' : { ssr: true },
        '/member/': { ssr: true }
    }
})
