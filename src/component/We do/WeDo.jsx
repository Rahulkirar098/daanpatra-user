import React from "react";
import Wheet from "../../assect/wheet.jpg";
import "./wedo.css";
const WeDo = () => {
    return (
        <div className="wedo">
         <div className="wedo-img">
                <img src={Wheet} />
            </div>
            <div className="wedo-text">
                <h1>How <span>Daanpatra</span> Works</h1>
                <p>
                    'Daanpatra' a social platform that brings together volunteers and donors interested in donating food.
                    Aimed at eliminating food wastage, ​'Daanpatra' is a unique concept started in Indore.
                </p>
            </div>
           
        </div>
    )
};
export default WeDo;