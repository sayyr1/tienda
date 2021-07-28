import React, { useEffect, useState } from 'react';

// const ProductDetails = (props) => {
//   // get the product from URL parameter.
//   const product = props.product_name;
//
//   // Use state for variable coming from an "api"
//
//   const [rank, setRank] = useState('');
//   const [year, setYear] = useState('');
//   const [inventor, setInventor] = useState('');
//
//   // Simulate an API call.
//   const fetchContent = () => {
//     switch (product.toLowerCase()) {
//       case 'Adidas':
//       case 'js':
//         setRank('3');
//         setYear('120');
//         setInventor('23');
//         break;
//       case 'Nike':
//         setRank('40');
//         setYear('10');
//         setInventor('24443');
//         break;
//       default:
//         setRank('n/4');
//         setYear('n/4');
//         setInventor('m/4');
//         break;
//     }
//   };
//
//   // Use to fetch data when components mounts.
//   useEffect(() => {
//     fetchContent();
//
//   }, []);
//
//   return (
//     <div>
//      <p>{rank} {year} {inventor} Hola</p>
//
//       <h1>Hola que hacer</h1>
//     </div>
//   );
// };
const ProductDetails = () =>{
  return(
    <h1>HOla</h1>
  )
}
export default ProductDetails;
