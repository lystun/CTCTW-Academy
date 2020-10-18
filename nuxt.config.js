export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'CTCTW Academy',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400&display=swap" },
            { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' },
            // { rel: 'stylesheet', href: 'https://unpkg.com/aos@2.3.1/dist/aos.css' },
        ],
        
        script : [
            { src: "https://kit.fontawesome.com/24b54c8fdd.js", type: 'text/javascript' },
            { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js", },
            { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js", },
            { src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js", },
            // { src: "https://unpkg.com/aos@2.3.1/dist/aos.js" },
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '@/assets/css/styles.css',
    ],

    loading: {
        color: '#F34A00',
        height: '3px',
    },

    pageTransition: 'page',

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        { src: '~/plugins/aos.js', mode: 'client' },
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/style-resources'
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL : "http://ctctwacademyapi.test/api",
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
    },

    styleResources: {
        scss: [
            '~assets/scss/*.scss',
            '~assets/scss/components/*.scss',
        ],
    },

}
