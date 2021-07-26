import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import {HashRouter} from "react-router-dom";
import App3 from "./App4";


const mountNode = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
    <HashRouter>
        <App3/>
    </HashRouter>
    </React.StrictMode>
    , mountNode);
