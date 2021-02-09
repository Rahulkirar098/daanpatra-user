import React from "react";
import "./contact.css";
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import HeadShake from 'react-reveal/HeadShake';

const Contact = () => {

    return (

          <section id="contact-section" id="contact">

           <div className="containers">
           <Zoom>
           <h2>Contact Us</h2></Zoom>
         
         <HeadShake><p>Email us and keep upto date with our latest news</p></HeadShake>
         
        <div className="contact-form">
<Flip top>
          <div>
            <i className="fa fa-phone" /><span className="form-info">  +91 6263362660, 7828383066</span><br/>
            <i className="fa fa-envelope" /><span className="form-info">  DAANPATRA18@GMAIL.COM</span>
          </div></Flip>
          
             
      <div>        
        <form>

        <Slide left>  <input type="text" placeholder="Your Name" required/></Slide>
        <Slide right>  <input type="text" placeholder="Mobile Number"/><br/></Slide>
        <Slide left> <input type="Email" placeholder="Email" required/><br/></Slide>
        <Slide right>  <textarea name="message" placeholder="Message" rows="5" required/><br/></Slide>
        <Slide left>  <button className="submit" >Send Message</button> </Slide>
        </form>   
          </div>
        </div>
      </div>
    </section>

    )


}
export default Contact;