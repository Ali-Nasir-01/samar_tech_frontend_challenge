// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  modules: ['@nuxt/image', '@pinia/nuxt'],
  components: [
    {
      path: '~/components',
     pathPrefix: false,
    },
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    quality: 80,
    format: ['webp'],
    presets: {
      products: {
        modifiers: {
          width: 50,
          height: 50
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.API_BASE_URL,
      products: '',
      categories: '',
      singleProduct: ''
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/variables.scss" as *;'
        }
      }
    }
  }
})
