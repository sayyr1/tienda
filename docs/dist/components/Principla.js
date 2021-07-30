import React from "../../snowpack/pkg/react.js";
import {Link} from "../../snowpack/pkg/react-router-dom.js";
const Principla = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-white flex flex-col items-center justify-center landing md:px-60 md:w-auto md:h-auto"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-white"
  }, "Say.com"), /* @__PURE__ */ React.createElement(Link, {
    className: "py-6 px-10 bg-yellow-500 rounded-full hover:bg-yellow-300 flex\n            items-center transition duration-300 ease-in-out animate-bounce",
    to: "/menu"
  }, "Ofertas", /* @__PURE__ */ React.createElement("svg", {
    className: "w-6 h-6 ml-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
  }))));
};
export default Principla;
