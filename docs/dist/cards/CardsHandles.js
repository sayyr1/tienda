import React from "../../snowpack/pkg/react.js";
import {Link, useParams, Route, BrowserRouter as Router, Switch, HashRouter} from "../../snowpack/pkg/react-router-dom.js";
import ProductDetails from "./ProductDetails.js";
const Account = () => {
  const {account} = useParams();
  return /* @__PURE__ */ React.createElement("h3", null, "ID: ", account);
};
const CardsHandler = (props) => {
  return /* @__PURE__ */ React.createElement(HashRouter, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/details",
    className: "rounded-full bg-green-400"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-center"
  }, props.names)), /* @__PURE__ */ React.createElement(Route, {
    path: "/:details"
  }, /* @__PURE__ */ React.createElement(Account, null))));
};
export default CardsHandler;
