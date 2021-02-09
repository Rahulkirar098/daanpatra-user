import React from "react";
import Digram from "../../../assect/digram.png";
import "../weare/weare.css";
import Shake from 'react-reveal/Shake';
import Jello from 'react-reveal/Jello';
import RubberBand from 'react-reveal/RubberBand';


const Weare = () => {
    return (
        <div className="weare" id="weare">

            <div className="weare-left">
                <Shake>
                    <img src={Digram} alt="donor" />
                </Shake>
            </div>

            <div className="weare-right">
                <RubberBand> <h1><span>Who We</span> Are </h1></RubberBand>
                <Jello>
                    <p>Danapatra is one such online free platform, through which any person can donate items like new or old clothes, toys,
                    books, furniture, old newspapers, dry grains, utensils, electronic items and other household items and help them to reach
                    a needy person. For this, all you have to do is, download the application and submit the information of whatever items you
                    want to donate, daanpatra team gets your information as soon as it is submitted,  team contacts you and collects goods
                    from home as well as your photo is shown on daanpatra’s social media pages so that you can become an inspiration to others
                    so that more people came forward for joining this initiative for this noble cause. Whenever  team surveyed and the goods are sent
                    to the needy family, then the photo of the donor Is shown on the  daanpatra social media pages. Through daanpatra, millions of
                    helpless people have been helped by connecting thousands of people, as well as this unique concept has been appreciated on many
                    big platforms Due to its transparency, many well-known TV artists have donated stuff and appreciated this initiative on their
                    social media.The "daanpatra " team always tries to make the donation reach to the actual needy person , so we have added a
                    feature in the app so that anyone who needs the goods for themselves or for any needy person can send a request in the app
                    for taking goods , With this, he can help other people along with him, as well as those who want to help not  through goods
                    but by giving their time , they can also join this platform and take the goods for the needy and be a part of this noble
                    cause.
.</p></Jello>
            </div>
        </div>

    )
};
export default Weare;