import React, {useState, useEffect} from "../snowpack/pkg/react.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import {Route, Switch} from "../snowpack/pkg/react-router-dom.js";
import Home from "./pages/home.js";
import Abouts from "./pages/about.js";
import Menu from "./pages/menu.js";
import Dropdown from "./components/Dropdown.js";
function App3() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, {
    toggle
  }), /* @__PURE__ */ React.createElement(Dropdown, {
    isOpen,
    toggle
  }), /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    exact: true,
    component: Home
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/menu",
    component: Menu
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/about",
    component: Abouts
  })), /* @__PURE__ */ React.createElement(Footer, null));
}
export default App3;
