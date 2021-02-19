import React,{useEffect} from "react";
import './dashbord.css'
import Sidebar from "./dashbord/Sidebar";

const Dashbord = (props) =>{
    useEffect(() => {
        props.setIsNavOpen(false);
    }, [])
    return(
        <div className="dashbord"> 
  
        </div>
    )
}

export default Dashbord;