import React from "react";
import ReactDOM from "react-dom/client";
import ClassComponent from "./ClassComponent";
import Function from "./ClassComponent/Function";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ClassComponent />
    <Function />
  </React.StrictMode>
);
