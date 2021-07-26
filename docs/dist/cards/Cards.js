import cardData from "./cardData.js";
import React from "../../snowpack/pkg/react.js";
import CardsHandler from "./CardsHandles.js";
const DisplayCards = cardData.map((products, pros) => {
  return /* @__PURE__ */ React.createElement(CardsHandler, {
    key: pros,
    images: products.image,
    names: products.product_name
  });
});
const renderCards = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-4 md:gap-5"
  }, DisplayCards);
};
export default renderCards;
