import React from "react";
import "./contact.css";
import ContactImage from "../../../assect/Contact.gif";

const Contact = () => {

    return (

      <div className="contact">

        <div className="contact-left">
            <img src={ContactImage} />
        </div>

        <div className="contact-right">


        <form>

          <input className="input-name" placeholder="Frist Name" />

          <input className="input-name" placeholder="Last Name" />
          <br />
          <br />
          <input className="input-all" placeholder="Email Address"  />
          <br />
          <br />
          <input className="input-all" placeholder="Phone Number" />
          <br />
          <br />
          <input className="input-discripation" placeholder="Discripation" />
          <br />
          <br />
          <button type="submit" >Submit</button>
        
          </form>

          </div>


      </div>
          

    )


}
export default Contact;