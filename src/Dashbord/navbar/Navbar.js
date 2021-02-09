import "./Navbar.css";
import avatar from "../../assect/avatar.svg";
import React, { Component,useState }  from 'react';




const Navbar =({sidebaropen, openSidebar}) => {
    

    return(

        <nav className="navbar">

            <div className="nav_icon" onClick={()=> openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>

            <div className="navbar_left">
            <a href="#"></a>
            <a href="#"></a>
            <a className="active_link" href="#" ></a>
            </div>
            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <i className="fa fa-clock-o"></i>
                </a>
                 <a href="#">
                     <img width="30"src={avatar} alt="avatar"/>
                 </a>   
            </div>
        </nav>
    );


};
export default Navbar;