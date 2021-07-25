import React from "../../snowpack/pkg/react.js";
import {Link} from "../../snowpack/pkg/react-router-dom.js";
const Navbar = ({toggle}) => {
  return /* @__PURE__ */ React.createElement("nav", {
    className: "flex justify-between items-center h-16 bg-white text-black-500 relative\n         shadow-sm font-mono",
    role: "navigation"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/",
    className: "pl-8"
  }, "Logo"), /* @__PURE__ */ React.createElement("div", {
    className: "px-4 cursor-pointer md:hidden",
    onClick: toggle
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "w-6 h-6",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6h16M4 12h16M4 18h16"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "pr-8 hidden md:block"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "p-4 no-underline",
    to: "../"
  }, "Home"), /* @__PURE__ */ React.createElement(Link, {
    className: "p-4 no-underline",
    to: "../menu"
  }, "Menu"), /* @__PURE__ */ React.createElement(Link, {
    className: "p-4 no-underline",
    to: "../about"
  }, "About"), /* @__PURE__ */ React.createElement(Link, {
    className: "p-4 no-underline",
    to: "../contact"
  }, "Contact")));
};
export default Navbar;
