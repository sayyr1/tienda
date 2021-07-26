import cardData from './cardData';
import React from 'react';
import CardsHandler from './CardsHandles';

const DisplayCards = cardData.map((products, pros) =>{
  return(
    <CardsHandler key={pros} images={products.image} names={products.product_name}/>
  )
})

const renderCards = () =>{
  return(
    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-5">
      {DisplayCards}
    </div>
  )
}
export default renderCards
