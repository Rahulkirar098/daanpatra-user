import React from "react";
import './sidebar.css'
import Userprofile from '../assect/avatar.svg'
import { Route, Switch } from 'react-router-dom';
import { sidebardata } from "./sidebardata";
import Certificate from "./Pages/Certificate";
import Donate from "./Pages/Donate";
import FAQDASHBORD from "./Pages/Faq";
import Topart from "../component/news gallary/topart";
import Gallery from "../component/news gallary/Gallery";
import Volunteer from "../component/volunteer/Volunteer";




const Sidebar = () => {
    return (
        <div className="dashbord-sidebar">
            <div className="sidebar">
                <div className="Profile">
                    <img className="userprofile" src={Userprofile} />
                    <h2>Rahul kirar</h2>
                </div>
                <ul className="sidebarmenu">
                    {sidebardata.map((val, key) => {
                        return (
                            <li className="sidebarli" id={window.location.pathname == val.link ? "active" : ""} key={key} onClick={() => {
                                window.location.pathname = val.link
                            }}>
                                <div id="sideicon">{val.icon}</div>
                                <div id="sidetitle">{val.title}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="right-dashbord">
                <switch>
                
                    <Route exact path='/certificate' component={Certificate} />
                    <Route exact path='/donate' component={Donate} />
                    <Route exact path='/faqdashbord' component={FAQDASHBORD} />
                    <Route exact path='/gallery' component={Gallery} />
                    <Route exact path='/volunteer' component={Volunteer} />
                </switch>
            </div>
        </div>
    )
}

export default Sidebar;