import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Route, Switch} from "react-router-dom";
import Home from './pages/home'
import Abouts from "./pages/about";
import Menu from "./pages/menu";
import Dropdown from "./components/Dropdown";

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
                <Route path="/menu" component={Menu}/>
                <Route path="/about" component={Abouts}/>
            </Switch>
            <Footer/>
        </>
    )
}

export default App3
