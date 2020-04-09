import React from "react";
import classes from "./Calculator.module.css"


const Navbar = (props) => {
    return(
        <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                        CalculatorDK
                </a>
            </nav>
        </div>
    )
}

export default Navbar