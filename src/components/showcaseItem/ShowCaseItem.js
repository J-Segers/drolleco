import React from 'react';
import "./ShowCaseItem.css";
import placeholder from "../../assets/image (2).png";

function ShowCaseItem() {
    return ( 
        <div className="ShowCaseItem">
            <img src={placeholder} alt="" />
        </div>
     );
}

export default ShowCaseItem;