import React from "react";
import "./footer.css";
import logo from "../../assect/logo11.png";
import Roll from 'react-reveal/Roll';

const Footer = () => {
    return (

        <footer id="footer">
            <Roll left>
                <img src={logo} alt="logo" />
            </Roll>
        </footer>

    )
}
export default Footer;