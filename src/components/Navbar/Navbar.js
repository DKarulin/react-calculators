import React from "react";
import classes from "./Calculator.module.css"
import {NavLink} from "react-router-dom";


const Navbar = (props) => {

    return(
        <div>
            <nav className="navbar navbar-light bg-light">
                <div>
                    <NavLink to='/' className="navbar-brand">Calculator</NavLink>
                    <NavLink to='/currency' className={`navbar-brand`} style={{}} >
                        CurrencyConverter</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar