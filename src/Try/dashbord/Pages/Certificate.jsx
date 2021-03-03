import React from 'react'
import "./certificate.css";
import Userprofile from "../../assect/avatar.svg";


function Certificate() {
    return (

        <div className="certificate">

            <h1 className="certificate-h1">Certificate</h1>
            <br />

            <img src={Userprofile} className="userprofile" alt="profile" />
            <br />
            
            <input type="file" onChange={(profile) => {
                console.log(profile.target.files, "result aaya hai")
            }} />
            <br />
            <h1 className="certificate-h1a">Rahul Kirar</h1>

            <br />
            <button type="submit" className="certificate-btn">Submit</button>
        </div>
    )
}

export default Certificate
