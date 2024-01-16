import React from "./core/React";
import { ReactDOM } from "./core/ReactDOM";
import App from "./App";

const root = document.querySelector("#root");
// const el = React.createElement("div", { id: "app" }, "hi, mini-react");

ReactDOM.createRoot(root).render(<App></App>);
