import React from 'react';
const CardsHandler = (props) =>{
  return(
    <div className="w-50 flex flex-col cursor-pointer hover:scale-110">
      <h3 className="text-center">{props.names}</h3>
      <img src={props.images} alt="hola"/>
    </div>
  )
}
export default CardsHandler
