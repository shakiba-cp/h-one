import Toast, { PluginOptions, POSITION } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp: any) => {
  const options: PluginOptions = {
    rtl: true,
    timeout: 3000,
    position: POSITION.TOP_RIGHT,
    toastClassName:'h__toast',
    closeButtonClassName:'t__close-btn',
  };

  nuxtApp.vueApp.use(Toast, options);
});
