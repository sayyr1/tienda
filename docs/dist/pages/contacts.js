import React from "../../snowpack/pkg/react.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  HashRouter,
  Redirect
} from "../../snowpack/pkg/react-router-dom.js";
export default function NestingExample() {
  let {path, url} = useRouteMatch();
  return /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: `${url}/contact`
  }, "Home")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: `${url}/topics`
  }, "Topics"))), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: `${path}/contact`
  }, /* @__PURE__ */ React.createElement(Contact, null)), /* @__PURE__ */ React.createElement(Route, {
    path: `${path}/topics`
  }, /* @__PURE__ */ React.createElement(Topics, null)))));
}
function Topics() {
  let {path, url} = useRouteMatch();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Topics"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: `${url}/rendering`
  }, "Rendering with react")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: `${url}/components`
  }, "Components")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: `${url}/sea`
  }, "Lo que sea"))), /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path
  }, /* @__PURE__ */ React.createElement("h3", null, "Please select a topic")), /* @__PURE__ */ React.createElement(Route, {
    path: `${path}/:topicId`
  }, /* @__PURE__ */ React.createElement(Topic, null))));
}
function Topic() {
  let {topicId} = useParams();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, " LLamando a ", topicId));
}
const Contact = () => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Hola"));
};
