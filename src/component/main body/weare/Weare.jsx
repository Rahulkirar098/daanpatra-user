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
                <p>Daanpatra Foundation is not-for-profit organisation headquartered in indore, India .
                it is established in 10 march 2018 for the purpose of saving food from wastage & helping needy peoples.
                This initiative is taken by indore AIG sonali dubey ji & it is Developed by Avwebworld Pvt. Ltd.
                software development company of indore.She thought that if we all help each other than no one will be in
                trouble & she believes that if only one person will try to help another one then he can't change the entire
                world but he can change the whole world for that particular person & if everyone will follow this then it
                will not help us for stopping the crime but no one will be die from hunger & poverty.</p></Jello>
            </div>
        </div>

    )
};
export default Weare;