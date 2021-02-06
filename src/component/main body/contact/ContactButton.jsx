import React from "react";
import "./contactbutton.css";
import {Link} from 'react-router-dom';

const ContactButton = () => {
    return (

        <div className="contact-button">

            <div className="button-responsive">
            <h1>Start Your Donation Journey With Us
</h1>

<button className="button"><span>
<Link  exact to="/contact" >Contact us </Link>
</span></button>
            </div>

        </div>


    )
};
export default ContactButton;