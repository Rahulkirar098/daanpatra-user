import React from "react";
import "./dashbord.css";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";

const Index = () =>{
    return (
        <div className="container">
            <Navbar />
            <Sidebar />
         </div>
    )
};

export default Index;