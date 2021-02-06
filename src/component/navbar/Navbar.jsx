import React from "react";
import "./navbar.css"
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

import logo from "../../assect/logo11.png";
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';






const Head = () => {


    return (
        <>

            <header>

                <nav>
                    <input id="nav-toggle" type="checkbox" />
                    <Bounce top>
                   <Link to="/"> <a href="#home"><img className="logo" src={logo} alt="logo" /></a></Link>
                    </Bounce>
                        <Slide right>
                    <ul className="links">
                        <li><NavLink exact activeClassName="active" to="/"><a href="#home">Home</a></NavLink></li>
                        <li><NavLink exact activeClassName="active" to="/weare"><a href="#weare">We Are</a></NavLink></li>
                        <li><NavLink exact activeClassName="active" to="/whatwedo"><a href="#wedo">We Do</a></NavLink></li>
                        <li><NavLink exact activeClassName="active" to="/Image"><a href="#gallery">Gallery</a></NavLink></li>
                        <li><NavLink exact activeClassName="active" to="/contact">Contact</NavLink></li> 
                        <li><NavLink exact activeClassName="active" to="/login">Donate</NavLink></li>
                        
                    </ul>
                    </Slide>
                    <label for="nav-toggle" className="icon-burger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </label>
                </nav>




            </header>

        </>
    )

};





export default Head;