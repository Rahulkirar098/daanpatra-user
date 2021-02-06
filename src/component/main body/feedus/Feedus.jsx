import React from "react";
import "../feedus/feedus.css";
import boy from "../../../assect/boy.jpg";
import Slide from 'react-reveal/Slide';

const Feed = () => {
    return (

        <div className="feedus">
        
            <Slide left>
                <div className="feed-text">

                    <h2>Let's Feed</h2>


                    <h1>The Hungry</h1>

                    <p>We request you to Join our hands to support this initiative for keeping
                   this distribution enduring.</p>

                </div></Slide>
                
            <Slide right> 
            <div className="feed-boy">
            <img src={boy} alt="vbn" />
            </div></Slide>

        </div>

    )
};

export default Feed;