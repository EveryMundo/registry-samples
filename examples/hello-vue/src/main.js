import { isReady } from "@everymundo/registry-script";

import { createApp } from "vue";
import App from "./App.vue";

isReady().then(async (payload) => {
  const app = createApp(App);
  app.config.globalProperties.config = payload;
  app.mount("#app");
});
