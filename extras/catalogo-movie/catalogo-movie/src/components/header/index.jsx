import React from "react"
import arniaLogo from '../../assets/icon_arnia.svg'
import './header.css'

const Header = () => {
    return (
        <div className="header">
             <img src={arniaLogo} className="logo" alt="Arnia logo" />
             <h2>Movies</h2>
        </div>   
    )
}

export default Header