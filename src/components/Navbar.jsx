import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ toggle }) => {
    return (
        <nav className="flex justify-between items-center h-16 bg-white text-black-500 relative
         shadow-sm font-mono"
             role="navigation">
            <NavLink to="/" className="pl-8">
                Logo
            </NavLink>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </div>
            
            <div className="pr-8 hidden md:block">
                <NavLink className="p-4 no-underline" to="/">Home</NavLink>
                <NavLink className="p-4 no-underline" to="./menu" activeClassName="bg-red-600 text-gray-100 rounded-lg">Ofertas</NavLink>
                <NavLink className="p-4 no-underline" to="/about" activeClassName="bg-red-600 text-gray-100 rounded-lg">Nosotros</NavLink>
                <NavLink className="p-4 no-underline" to="/contact"  activeClassName="bg-red-600 text-gray-100 rounded-lg">Contact</NavLink>
            </div>
        </nav>
    )
    
}
export default Navbar
