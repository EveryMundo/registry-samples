import { isReady } from "@everymundo/registry-script";

const startApp = (payload = {}) => {
  const { settings, styles, i18n } = payload;

  // Using settings
  const title = document.querySelector("h1");
  title.innerHTML = settings?.title || "Error";

  // Module payload
  const textarea = document.querySelector("textarea");
  textarea.value = JSON.stringify(payload, null, 2);

  // Using styles
  const color = document.querySelector("div.color>i");
  color.style.backgroundColor = styles?.value?.colors?.primary || "#333";

  // Using labels
  const label = document.querySelector("div.color>span");
  label.textContent = i18n?.labels["example-label-key"] || "Error";
};

window.onload = async () => {
  const payload = await isReady();
  startApp(payload);
};
