import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/home'
import Abouts from "./pages/about";
import Ofertas from "./pages/ofertas";
import Dropdown from "./components/Dropdown";
import ProductDetails from './cards/ProductDetails';
import Contact from './pages/contacts';
import Adultos from './pages/Adultos';

function App3() {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen)
    };
    useEffect(() => {
        const hideMenu = () =>{
            if (window.innerWidth > 768 && isOpen){
                setIsOpen(false)
            }
        };
        
        window.addEventListener('resize', hideMenu);
        return () =>{
            window.removeEventListener('resize', hideMenu)
        };
        
    });
    
    
    return (
        <>
            <Navbar toggle={toggle}/>
            <Dropdown isOpen = {isOpen} toggle={toggle}/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/menu" exact component={Ofertas}/>
                <Route path="/about"  exact component={Abouts}/>
                <Route path="/contact" exact component={Contact}/>
                <Route path="/adultos" exact component={Adultos}/>
            </Switch>
            <Footer/>
        </>
    )
}

export default App3
