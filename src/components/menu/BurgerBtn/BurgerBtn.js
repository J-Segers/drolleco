import React, { useState } from 'react';
import "./BurgerBtn.css";
import closeIcon from "../../../assets/close-button-png-30238.png";

function BurgerMenu() {
    
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div id="burgerBtn" onClick={() => setMenuOpen(!menuOpen)}>
                <div className="bar"/>
            </div>
            <div className={`sideMenu ${menuOpen ? "open" : "closed"}`}>
                <img className="closeIcon" src={closeIcon} alt="" width={20} onClick={() => setMenuOpen(!menuOpen)}/>
            </div>
        </>

    );
}

export default BurgerMenu;