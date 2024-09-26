import React from "react";
import ReactDOM from "react-dom"; // Corrected 'ReactDom' to 'ReactDOM'
import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
