// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  pages: true,
  modules: ["@nuxt/content", '@nuxtjs/tailwindcss'],
  content: {
    highlight: {},
        navigation: {
            fields: ['title', 'description', 'series' ],
        },
        experimental: {
            search: {
                indexed: true,
            },
        },
    },
    tailwindcss: {
        viewer: true,
    },
    nitro: {
        preset: "github_pages"
    },
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css',
    ],
    build: {
        transpile: [
            "@fortawesome/fontawesome-svg-core",
            "@fortawesome/free-brands-svg-icons",
            "@fortawesome/vue-fontawesome",
        ],
    },
})
