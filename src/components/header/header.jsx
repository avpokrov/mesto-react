import React from "react";
import logo from '../../images/logo.svg';

function Header() {
    return (
        <header className="header ident-top40px">
            <img src={logo} alt="logo" className="header__logo" />
        </header>
    );
}

export default Header;