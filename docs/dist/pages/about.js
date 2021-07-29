import React from "../../snowpack/pkg/react.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams,
  useLocation
} from "../../snowpack/pkg/react-router-dom.js";
export default function ModalGalleryExample() {
  return /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(ModalSwitch, null));
}
function ModalSwitch() {
  let location = useLocation();
  let background = location.state && location.state.background;
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Switch, {
    location: background || location
  }, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/",
    children: /* @__PURE__ */ React.createElement(Casa, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/gallery",
    children: /* @__PURE__ */ React.createElement(Gallery, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/img/:id",
    children: /* @__PURE__ */ React.createElement(ImageView, null)
  })), background && /* @__PURE__ */ React.createElement(Route, {
    path: "/img/:id",
    children: /* @__PURE__ */ React.createElement(Modal, null)
  }));
}
const IMAGES = [
  {id: 0, title: "Dark Orchid", color: "DarkOrchid"},
  {id: 1, title: "Lime Green", color: "LimeGreen"},
  {id: 2, title: "Tomato", color: "Tomato"},
  {id: 3, title: "Seven Ate Nine", color: "#789"},
  {id: 4, title: "Crimson", color: "Crimson"}
];
function Thubnail({color}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-10 h-16",
    style: {background: color}
  });
}
function Image({color}) {
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      width: "100%",
      height: 400,
      background: color
    }
  });
}
function Casa() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/gallery/"
  }, "Visit the Gallery"), /* @__PURE__ */ React.createElement("h2", null, "Featured Images"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/img/2"
  }, "Tomato")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/img/4"
  }, "Crimson"))));
}
function Gallery() {
  let location = useLocation();
  return /* @__PURE__ */ React.createElement("div", null, IMAGES.map((i) => /* @__PURE__ */ React.createElement(Link, {
    key: i.id,
    to: {
      pathname: `/img/${i.id}`,
      state: {background: location}
    }
  }, /* @__PURE__ */ React.createElement(Thubnail, {
    color: i.color
  }), /* @__PURE__ */ React.createElement("p", null, i.title))));
}
function ImageView() {
  let {id} = useParams();
  let image = IMAGES[parseInt(id, 10)];
  if (!image)
    return /* @__PURE__ */ React.createElement("div", null, "Image not found");
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, image.title), /* @__PURE__ */ React.createElement(Image, {
    color: image.color
  }));
}
function Modal() {
  let history = useHistory();
  let {id} = useParams();
  let image = IMAGES[parseInt(id, 10)];
  if (!image)
    return null;
  let back = (e) => {
    e.stopPropagation();
    history.goBack();
  };
  return /* @__PURE__ */ React.createElement("div", {
    onClick: back,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      background: "rgba(0, 0, 0, 0.15"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "modal",
    style: {
      position: "absolute",
      background: "#fff",
      top: 25,
      left: "10%",
      right: "10%",
      padding: 15,
      border: "2px solid #444"
    }
  }, /* @__PURE__ */ React.createElement("h1", null, image.title), /* @__PURE__ */ React.createElement(Image, {
    color: image.color
  }), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: back
  }, "Close")));
}
