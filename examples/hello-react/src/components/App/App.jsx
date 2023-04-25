import "./App.css";

function App({ payload = {} }) {
  const { settings, styles, i18n } = payload;

  // Using settings
  const title = settings?.title || "Error";

  // Module payload
  const payloadStr = JSON.stringify(payload, null, 2);

  // Using labels
  const label = i18n?.labels["example-label-key"] || "Error";

  // Using styles
  const color = styles?.value?.colors?.primary || "#333";

  return (
    <div className="container">
      <h1>{title}</h1>
      <textarea defaultValue={payloadStr} />
      <div className="color">
        <i style={{ backgroundColor: color }}></i>
        <span>{label}</span>
      </div>
    </div>
  );
}

export default App;
