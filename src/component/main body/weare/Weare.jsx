import React from "react";
import Digram from "../../../assect/digram.png";
import "../weare/weare.css";


const Weare = () => {
    return (
        <div className="weare" id="weare">

            <div className="weare-left">
             
                    <img src={Digram} alt="donor" alt="diagram" />
              
            </div>

            <div className="weare-right">
              <h1><span>Who We</span> Are </h1>
              
                    <p>Danapatra is one such online free platform, through which any person can donate items like new or old clothes, toys, books, furniture, old newspapers, dry grains, utensils, electronic items and other household items and help them to reach a needy person. For this, all you have to do is, download the daanpatra application or go to the daanpatra website and submit the information of whatever items you want to donate, daanpatra team gets your information as soon as it is submitted, daanpatra team contacts you and collects goods from home , as well as your photo is shown on daanpatra app as well as social media pages so that you can become an inspiration to others so that more people came forward for joining this initiative for this noble cause. Through this plateform, millions of helpless people have been helped
.</p>
            </div>
        </div>

    )
};
export default Weare;