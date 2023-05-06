export default defineNuxtConfig({
  css: [
    "@/assets/css/reset.css",
    "@/assets/css/gangColors.sass",
    "@/assets/css/gangFonts.sass",
  ],
  modules: ["@nuxt/image-edge"],
  image: {
    dir: "assets/images",
  },
  runtimeConfig: {
    apiSecret: process.env.API_SECRET,
    public: {
      apiBase: process.env.API_BASE || "peen",
    },
  },
});
