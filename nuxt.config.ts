// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  css: ["~/assets/css/main.scss", "~/assets/css/custom.scss"],
  modules: [
    "@formkit/auto-animate/nuxt",
    "nuxt-swiper",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
  ],
  build: {
    transpile: ["vue-toastification"],
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    layoutTransition: {
      name: "layout",
      mode: "out-in",
    },
    head: {
      htmlAttrs: {
        dir: "rtl",
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  colorMode: {
    classSuffix: "",
    fallback: "light",
    preference: "light",
  },
  image: {
    quality: 100,
    domains: ["https://run.khaliliexport.ir"],
    alias: { shop: "https://run.khaliliexport.ir" },
  },
});
