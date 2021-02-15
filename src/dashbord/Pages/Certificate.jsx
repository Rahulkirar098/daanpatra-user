import React from 'react'
import "./certificate.css";
import Userprofile from "../../assect/avatar.svg";


function Certificate() {
    return (

        <div className="certificate">

            <h1>Certificate</h1>
            <br />
            <br />
            <img src={Userprofile} className="userprofile" />
            <br />
            <br />
            <from>
                <input placeholder="Full Name" />
                <br />
                <br />
                <button type="submit">Submit</button>


            </from>
        </div>
    )
}

export default Certificate
