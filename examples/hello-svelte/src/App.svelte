<script>
	export let payload = {};
  const { settings, styles, i18n } = payload;

  // Using settings
  const title = settings?.title || "Error"

  // Using styles
	const color = styles?.value?.colors?.primary || "#333"

  // Using labels
  const label = i18n?.labels["example-label-key"] || "Error"
</script>

<main>
	<div id="container">
    <h1>{title}</h1>
    <textarea class="payload">{JSON.stringify(payload, null, 2)}</textarea>
    <div class="color">
      <i style="background-color: {color}"></i>
      <span>{label}</span>
    </div>
  </div>
</main>

<style>
	div#container {
    max-width: 1024px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
      Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    text-align: left;
  }

  h1 {
    margin: 0 0 15px 0;
  }

  textarea.payload {
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

  div.color i {
    width: 20px;
    height: 20px;
    float: left;
    margin-right: 8px;
  }
  div.color span {
    font-weight: bold;
  }
</style>
