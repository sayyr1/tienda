import React from 'react';
import { Link, useParams, Route, BrowserRouter as Router, Switch, HashRouter } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const Account = () => {
  const { account } = useParams();
  return (
    <h3>ID: {account}</h3>
  );
};


const CardsHandler = (props) => {
  return (
    <HashRouter>
      <div>
        <Link to='/details' className='rounded-full bg-green-400'>
          <h3 className='text-center'>{props.names}</h3>
        </Link>
        
          <Route path='/:details'>
            <Account/>
          </Route>
      </div>
    </HashRouter>
  );
};
export default CardsHandler;
