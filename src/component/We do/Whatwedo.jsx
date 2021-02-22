import React from "react";
import "./whatwedo.css"
import Chart from "../../assect/chart.png";
import Typewriter from 'typewriter-effect'
import Fade from 'react-reveal/Fade';
import Food from '../../assect/ingredients.png'
import Applinces from '../../assect/download (1).png'
import Cloths from '../../assect/download.png'

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
                        }} onInit={(wedo) => {
                            wedo.typeString("At Daanpatra, we provide practical, tangible help that makes an immediate difference to orphaned children. We are working towards a day when every child can grow up in a loving family.")
                                .pauseFor(2000)
                                .start();
                        }}
                    /></p>

                <img className="chart-digram" src={Chart} alt="chart" />

                <div className="wedo-pwf">

                    <div className="Hunger">
                        <img src={Food} />
                        <h2>Preventing Hunger</h2>
                        <p>Fresh food prepared at select locations are often donated to feed hungry people by contributing in cash.
.</p>
                    </div>

                    <div className="Clothing">
                    <img src={Cloths} />

                        <h2>Clothing</h2>
                        <p>Many children are in constant need of warm clothing. By providing it, Daanpatra also protects children from cold..</p>
                    </div>

                    <div className="Financial ">
                    <img src={Applinces} />
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