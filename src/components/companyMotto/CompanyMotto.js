import React from 'react';
import "./CompanyMotto.css";
import logoBlack from "../../assets/Sarvet_Drolleco_Musta_1.png";

function CompanyMotto() {
    return (
        <div id="companyMottoContainer">
            <img src={logoBlack} alt="drolleco logo black" />
            <div id="motto">
                Drolleco<br />
                CAPS FOR ABSOLUTE GOATS<br />
                We believe life should be fun, and if it’s not, at least you can be
            </div>
        </div>
    );
}

export default CompanyMotto;