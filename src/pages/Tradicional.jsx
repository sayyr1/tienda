import React from 'react';

const informationArray = [
  {
    id: 1,
    price: 10,
    name: 'Camisetas',
    image: 'https://raw.githubusercontent.com/sayyr1/personal/master/images/kisth_1.png',
  },
  {
    id: 1,
    price: 10,
    name: 'Camisetas',
    image: 'https://raw.githubusercontent.com/sayyr1/personal/master/images/kisth_1.png',
  },
  {
    id: 1,
    price: 10,
    name: 'Sacos',
    image: 'https://raw.githubusercontent.com/sayyr1/personal/master/images/kisth_1.png',
  },
  {
    id: 1,
    price: 10,
    name: 'Camisetas',
    image: 'https://raw.githubusercontent.com/sayyr1/personal/master/images/kisth_1.png',
  },
  {
    id: 1,
    price: 10,
    name: 'Camisetas',
    image: 'https://raw.githubusercontent.com/sayyr1/personal/master/images/kisth_1.png',
  },
  {
    id: 1,
    price: 10,
    name: 'Camisetas',
    image: 'https://raw.githubusercontent.com/sayyr1/personal/master/images/kisth_1.png',
  },
  {
    id: 1,
    price: 10,
    name: 'Camisetas',
    image: 'https://raw.githubusercontent.com/sayyr1/personal/master/images/kisth_1.png',
  },
  {
    id: 1,
    price: 10,
    name: 'Camisetas',
    image: 'https://raw.githubusercontent.com/sayyr1/personal/master/images/kisth_1.png',
  },
  {
    id: 1,
    price: 10,
    name: 'Camisetas',
    image: 'https://raw.githubusercontent.com/sayyr1/personal/master/images/kisth_1.png',
  },
];

const imagesDisplay = informationArray.map((items) => {
  return (
    <div className='group  flex flex-col items-center justify-center border border-green-300 bg-white mb-4 relative'>
      <h2 className="text-xl">{items.name}</h2>
      <img className=" group-hover:grayscale group-hover:blur group-hover:contrast" src={items.image} alt={`${items.name} images`} />
      
      <div className="w-full bg-green-200 text-center h-40 transform opacity-0 group-hover:opacity-100 transition absolute bottom-0 left-0
      duration-1000 flex flex-col items-center justify-center rounded-lg
      ">
        <a
          href="https://api.whatsapp.com/send/?phone=%2B593983842004&text=Estoy+Interesado+en+este+producto.&app_absent=0"
          target="_blank" className="rounded-xl mb-2 p-2 text-white bg-green-400
         transition duration-300 transform translate-y-19 animate-bounce">Comprar</a>
      </div>
    </div>
  );
});

function Tradicional() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-5 p-10 bg-gray-100'>
      {imagesDisplay}
    </div>
  );
}

export default Tradicional;
