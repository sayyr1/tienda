import React from "../../snowpack/pkg/react.js";
import {Link} from "../../snowpack/pkg/react-router-dom.js";
const Dropdown = ({isOpen, toggle}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: isOpen ? "grid grid-rows-4 text-center items-center bg-yellow-500" : "hidden",
    onClick: toggle
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "p-4 no-underline",
    to: "/"
  }, "Home"), /* @__PURE__ */ React.createElement(Link, {
    className: "p-4 no-underline",
    to: "/menu"
  }, "Menu"), /* @__PURE__ */ React.createElement(Link, {
    className: "p-4 no-underline",
    to: "/about"
  }, "About"), /* @__PURE__ */ React.createElement(Link, {
    className: "p-4 no-underline",
    to: "/contact"
  }, "Contact"));
};
export default Dropdown;
