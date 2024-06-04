import React from 'react';
import "./ShopItem.css";
import placeholderItem from "../../assets/black cap/classic-dad-hat-black-front-660acfc9c5fb4 copy.png";

function ShopItem() {
    return (
        <div className="item">
            <img src={placeholderItem} alt="" />
        </div>
    );
}

export default ShopItem;