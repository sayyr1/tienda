import React, {useState, useEffect} from "../snowpack/pkg/react.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import {Redirect, Route, Switch} from "../snowpack/pkg/react-router-dom.js";
import Home from "./pages/home.js";
import Abouts from "./pages/about.js";
import Ofertas from "./pages/ofertas.js";
import Dropdown from "./components/Dropdown.js";
import ProductDetails from "./cards/ProductDetails.js";
import Contact from "./pages/contacts.js";
import Adultos from "./pages/Adultos.js";
import Tradicional from "./pages/Tradicional.js";
import Ninos from "./pages/Ninos.js";
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
    exact: true,
    component: Ofertas
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/about",
    exact: true,
    component: Abouts
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/contact",
    exact: true,
    component: Contact
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/adultos",
    exact: true,
    component: Adultos
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/ninos",
    exact: true,
    component: Ninos
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/tradicional",
    exact: true,
    component: Tradicional
  })), /* @__PURE__ */ React.createElement(Footer, null));
}
export default App3;
