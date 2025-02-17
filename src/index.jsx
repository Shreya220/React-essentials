import ReactDOM from "react-dom/client";
// this ReactDOM library renders the App Component

import React from "react";
import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
// * valid alternative to JSX code
// ReactDOM.createRoot(entryPoint).render(React.createElement(App));

