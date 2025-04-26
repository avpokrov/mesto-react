import React from "react";
import logo from '../../images/logo.svg';

function Header() {
    return (
        <header class="header ident-top40px">
            <img src={logo} alt="logo" class="header__logo" />
        </header>
    );
}

export default Header;