import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App3 from "./App4";


const mountNode = document.getElementById("app");
ReactDOM.render(
    <React.StrictMode>
    <BrowserRouter>
        <App3/>
    </BrowserRouter>
    </React.StrictMode>
    , mountNode);
