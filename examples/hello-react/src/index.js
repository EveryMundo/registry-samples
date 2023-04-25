import { isReady } from "@everymundo/registry-script";

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

isReady().then(async (payload) => {
  ReactDOM.render(<App payload={payload} />, document.getElementById("root"));
});
