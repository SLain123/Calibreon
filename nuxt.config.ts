// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    runtimeConfig: {
        public: {
            baseUrl: process.env.NUXT_ENV_BASE_URL,
        },
    },

    typescript: {
        strict: true,
        typeCheck: true,
    },

    app: {
        head: {
            title: 'Calibreon',
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                { hid: 'description', name: 'description', content: '' },
                { name: 'format-detection', content: 'telephone=no' },
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/icons/favicon.ico',
                },
            ],
        },
    },
    css: ['assets/styles/global.scss'],

    plugins: [],

    modules: ['@pinia/nuxt', 'nuxt-icon'],

    components: true,
});
