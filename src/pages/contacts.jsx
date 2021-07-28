import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Link, useParams, useRouteMatch, HashRouter, Redirect,
} from 'react-router-dom';

export default function NestingExample() {
  let { path, url } = useRouteMatch();
  
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to={`${url}/contact`}>Home</Link>
          </li>
          <li>
            <Link to={`${url}/topics`}>Topics</Link>
          </li>
        </ul>
        <hr />
        
        <Switch>
          <Route exact path={`${path}/contact`}>
            <Contact />
          </Route>
          <Route path={`${path}/topics`}>
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Topics() {
  let { path, url } = useRouteMatch();
  
  
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with react</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/sea`}>Lo que sea</Link>
        </li>
      </ul>
      
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return (
    <div>
      <h3> LLamando a {topicId}</h3>
    </div>
  );
}

const Contact = () => {
  return (
    <div>
      <h2>Hola</h2>
    </div>
  );
};
