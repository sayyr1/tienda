import React from "../../snowpack/pkg/react.js";
const informationArray = [
  {
    id: 1,
    price: 10,
    name: "Camisetas",
    image: "https://raw.githubusercontent.com/sayyr1/personal/master/images/kisth_1.png"
  },
  {
    id: 1,
    price: 10,
    name: "Camisetas",
    image: "https://raw.githubusercontent.com/sayyr1/personal/master/images/kisth_1.png"
  },
  {
    id: 1,
    price: 10,
    name: "Sacos",
    image: "https://raw.githubusercontent.com/sayyr1/personal/master/images/kisth_1.png"
  },
  {
    id: 1,
    price: 10,
    name: "Camisetas",
    image: "https://raw.githubusercontent.com/sayyr1/personal/master/images/kisth_1.png"
  },
  {
    id: 1,
    price: 10,
    name: "Camisetas",
    image: "https://raw.githubusercontent.com/sayyr1/personal/master/images/kisth_1.png"
  },
  {
    id: 1,
    price: 10,
    name: "Camisetas",
    image: "https://raw.githubusercontent.com/sayyr1/personal/master/images/kisth_1.png"
  },
  {
    id: 1,
    price: 10,
    name: "Camisetas",
    image: "https://raw.githubusercontent.com/sayyr1/personal/master/images/kisth_1.png"
  },
  {
    id: 1,
    price: 10,
    name: "Camisetas",
    image: "https://raw.githubusercontent.com/sayyr1/personal/master/images/kisth_1.png"
  },
  {
    id: 1,
    price: 10,
    name: "Camisetas",
    image: "https://raw.githubusercontent.com/sayyr1/personal/master/images/kisth_1.png"
  }
];
const imagesDisplay = informationArray.map((items) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center justify-center border border-green-300 bg-white mb-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl"
  }, items.name), /* @__PURE__ */ React.createElement("img", {
    className: "hover:scale-110",
    src: items.image,
    alt: `${items.name} images`
  }), /* @__PURE__ */ React.createElement("a", {
    href: "https://api.whatsapp.com/send/?phone=%2B593983842004&text=Estoy+Interesado+en+este+producto.&app_absent=0",
    target: "_blank",
    className: "rounded-xl mb-2 p-2 text-white bg-green-400"
  }, "Comprar"));
});
function Adultos() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-5 p-10 bg-gray-100"
  }, imagesDisplay);
}
export default Adultos;
