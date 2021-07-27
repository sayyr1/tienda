import React from "../../snowpack/pkg/react.js";
const CardsHandler = (props) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-50 flex flex-col cursor-pointer hover:scale-110"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-center"
  }, props.names), /* @__PURE__ */ React.createElement("img", {
    src: props.images,
    alt: "hola"
  }));
};
export default CardsHandler;
