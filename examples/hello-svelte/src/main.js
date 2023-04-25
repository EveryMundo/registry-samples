import { isReady } from "@everymundo/registry-script";

import "./global.css";

import App from "./App.svelte";

isReady().then(async (payload) => {
  new App({
    target: document.body,
    props: {
      payload,
    },
  });
});
