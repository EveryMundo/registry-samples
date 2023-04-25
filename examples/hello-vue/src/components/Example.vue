<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <textarea v-bind:value="config"></textarea>
    <div class="color">
      <span :style="{ 'background-color': color }"></span>
      <label>{{ label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Example",
  data() {
    return {
      config: JSON.stringify(this.config, null, 2),
      title: this.config?.settings?.title || "Error",
      color: this.config?.styles?.value?.colors?.primary || "#333",
      label: this.config?.i18n?.labels["cmp-example-label-key"] || "Error",
    };
  },
};
</script>

<style scoped>
div.container {
  max-width: 1024px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-align: left;
}

h1 {
  margin: 0 0 15px 0;
}

textarea {
  box-sizing: border-box;
  font-family: monospace;
  font-size: 10px;
  width: 100%;
  max-width: 100%;
  height: 240px;
  border: 3px solid #ccc;
  color: #444;
  background: #fffde8;
  margin: 0 0 15px 0;
  padding: 10px;
  border-radius: 2px;
}

div.color span {
  width: 20px;
  height: 20px;
  float: left;
  margin-right: 8px;
}
div.color label {
  font-weight: bold;
}
</style>
