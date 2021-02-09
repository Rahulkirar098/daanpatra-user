import "./Sidebar.css";
import logo from "../../assect/logofinal.png";
import {Link} from "react-router-dom";
import React, { Component,useState }  from 'react';


const Sidebar = ({ sidebaropen, closeSidebar}) => {

    

    return(

        <div className={sidebaropen ? "sidebar-responsive": ""} id="sidebar">
            <div className="sidebar__title">
                <i className="fa fa-times"
                 id="sidebarIcon"
                  onClick={() => closeSidebar()}>

                </i>
            </div>
                <div className="sidebar__menu">

                <div className="sidebar__link active_menu_link">

                    <i className="fa fa-home"></i>
                    <Link to="/main">Dashboard</Link>
                    
                </div>
                {/* <h2>MNG</h2> */}
                <div className="sidebar__link">
                    <i className="fa fa-user"></i>
                    <Link to="/userprofile">User Profile</Link>
                    
                </div>    
                    <div className="sidebar__link">
                        <i className="fa fa-id-badge"></i>
                        <Link  to="/ngo">Ngo Profile</Link>
                    </div>
                    <div className="sidebar__link">
                        <i className=" fa fa-user-plus"></i>
                        <a href="#">Invitation Details</a>
                    </div>
                    
          
                </div>
          </div>
        
    );


}

export default Sidebar;