import React from "../../snowpack/pkg/react.js";
const opcionesArray = [
  {
    id: 1,
    name: "Adultos",
    images: "https://images.unsplash.com/photo-1464666495445-5a33228a808e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    description: "Products fabulous para adultos. "
  },
  {
    id: 1,
    name: "Niños",
    images: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80",
    description: "Products fabulous para adultos. "
  },
  {
    id: 1,
    name: "Tradicional",
    images: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    description: "Products fabulous para adultos. "
  }
];
const opcionDisplay = opcionesArray.map((opciones) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-white flex items-center flex-col px-20 shadow-sm"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl md:text-3xl lg:text-xl"
  }, opciones.name), /* @__PURE__ */ React.createElement("img", {
    className: "md:h-40",
    src: opciones.images,
    alt: opciones.name
  }), /* @__PURE__ */ React.createElement("p", {
    className: "text-center"
  }, opciones.description));
});
const Opciones = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: " mt-10 grid grid-cols-1 md:grid-cols-3 bg-gray-100 md:gap-5 md:p-10"
  }, opcionDisplay);
};
export default Opciones;
