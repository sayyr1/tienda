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
    className: "group  flex flex-col items-center justify-center border border-green-300 bg-white mb-4 relative"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl"
  }, items.name), /* @__PURE__ */ React.createElement("img", {
    className: " group-hover:grayscale group-hover:blur group-hover:contrast",
    src: items.image,
    alt: `${items.name} images`
  }), /* @__PURE__ */ React.createElement("div", {
    className: "w-full bg-green-200 text-center h-40 transform opacity-0 group-hover:opacity-100 transition absolute bottom-0 left-0\n      duration-1000 flex flex-col items-center justify-center rounded-lg\n      "
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://api.whatsapp.com/send/?phone=%2B593983842004&text=Estoy+Interesado+en+este+producto.&app_absent=0",
    target: "_blank",
    className: "rounded-xl mb-2 p-2 text-white bg-green-400\n         transition duration-300 transform translate-y-19 animate-bounce"
  }, "Comprar")));
});
function Tradicional() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-5 p-10 bg-gray-100"
  }, imagesDisplay);
}
export default Tradicional;
