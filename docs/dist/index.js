import * as __SNOWPACK_ENV__ from '../snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from "../snowpack/pkg/react.js";
import ReactDOM from "../snowpack/pkg/react-dom.js";
import App from "./App.js";
import "./index.css.proxy.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(App, null), /* @__PURE__ */ React.createElement("p", {
  className: "text-red-500"
}, "hola no se que estas haciendo")), document.getElementById("root"));
if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
}
