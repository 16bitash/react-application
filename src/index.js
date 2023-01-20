import React from "react";
import ReactDOM from "react-dom/client";
import CustomProvider from "./CustomProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CustomProvider />
  </React.StrictMode>
);
