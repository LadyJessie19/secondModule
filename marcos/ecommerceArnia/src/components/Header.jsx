import React from "react";
import logo from '../assets/logo.svg'

const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <img src={logo} alt="Logo Arnia" />
            </div>
            <div className="titleHeader">
                <h1>Virtual Store</h1>
            </div>
        </div>
    )
}

export default Header