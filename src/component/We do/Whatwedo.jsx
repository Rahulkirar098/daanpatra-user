import React from "react";
import "./whatwedo.css"
import Chart from "../../assect/chart.png";
import Typewriter from 'typewriter-effect'
import Fade from 'react-reveal/Fade';

const WhatWeDo = () => {
    return (<>
        <Fade top>
        <div className="whatwedo" id="wedo">
            <center><h1 className="wedo-h1">How Daanpatra Work</h1></center>
            <p className="wedo-p">
                 <Typewriter 
                 options={{
                    autoStart: true,
                    loop: true,
                  }}onInit={(wedo)=>{
                    wedo.typeString("At Daanpatra, we provide practical, tangible help that makes an immediate difference to orphaned children. We are working towards a day when every child can grow up in a loving family.")
                    .pauseFor(2000)
                    .start();
                  }}
                  /></p>

                 <img className="chart-digram" src={Chart} alt="chart" />
                 
            <div className="wedo-pwf">

                <div className="Hunger">
                    <i className="fas fa-hamburger" />
                    <h2>Preventing Hunger</h2>
                    <p>Many children are suffering from hunger worldwide. We make everything possible to solve this problem.</p>
                </div>

                <div className="Clothing">
                <i className="fas fa-tshirt" />
                    <h2>Warm Clothing</h2>
                    <p>Many children are in constant need of warm clothing. By providing it, Daanpatra also protects children from cold..</p>
                </div>

                <div className="Financial ">
                <i className="fas fa-wallet" />
                    <h2>Financial Assistance</h2>
                    <p>One of our main tasks is providing financial help & reliable assistance to orphaned children.</p>
                </div>

            </div>

            {/* <img className="chart-digram" src={Chart} alt="chart" /> */}

        </div>
        </Fade>
        </>
    )
    
};
export default WhatWeDo;