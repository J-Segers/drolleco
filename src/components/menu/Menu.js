import React, { useEffect, useState } from 'react';
import "./Menu.css";
import companyLogoWhite from "../../assets/Sarvet_Drolleco_Valkoinen.png";
import cartIcon from "../../assets/cart-icon-28356.png"
import BurgerMenu from './BurgerBtn/BurgerBtn';

function Menu() {

    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0)

    const onscroll = e => {
        setScrollTop(e.target.documentElement.scrollTop);
        setScrolling(e.target.documentElement.scrollTop > scrollTop);
    }

    useEffect(() => {
        window.addEventListener('scroll', onscroll);
    },[]);

    return (
        <>
            <div className={`menu ${scrolling ? "scrolled" : "top"}`}>
                <BurgerMenu />
                <img id="menu-logo"src={companyLogoWhite} alt="" />
                <img id="cart" src={cartIcon} alt="" width={30}/>
            </div>
        </>
    );
}

export default Menu; 