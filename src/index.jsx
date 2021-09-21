import React from "react";
import ReactDOM from "react-dom";
// import { HashRouter, Route, Link } from "react-router-dom"
import reportWebVitals from "./reportWebVitals";
import ScriptTag from "react-script-tag";
import "./index.css";
import { Router } from "./Route/Route";
import 'normalize.css/normalize.css'
const nav = () => {
  window.addEventListener("scroll", function () {
    var nav = document.querySelector(".nf-nav");
    if (document.documentElement.scrollTop !== 0) {
      nav.style.backgroundColor = "#0d0d0d";
      nav.style.backgroundImage = "#fff";
      console.log(document.documentElement.scrollTop);
    } else {
      nav.style.backgroundColor = "transparent";
      nav.style.backgroundImage =
        "linear-gradient(to bottom, rgba(0, 0, 0, .7) 10%, rgba(0, 0, 0, 0))";
    }
  });
};

ReactDOM.render(
  <React.StrictMode>
    {nav()}
    <ScriptTag
      type="text/javascript"
      src="https://code.iconify.design/2/2.0.3/iconify.min.js"
    />
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
