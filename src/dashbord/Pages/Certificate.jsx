import React from 'react'
import "./certificate.css";
import Userprofile from "../../assect/avatar.svg";


function Certificate() {
    return (

        <div className="certificate">

            <h1 className="certificate-h1">Certificate</h1>
            <br />
            <br />
            <img src={Userprofile} className="userprofile" alt="profile" />
            <br />
            <br />
                <input type="file" onChange={(profile)=>{
                    console.log(profile.target.files,"result aaya hai")
                }} />
                <br />
                <br />
                <h1 className="certificate-h1">Rahul Kirar</h1>
                <br />
                <br />
                <button type="submit">Submit</button>
        </div>
    )
}

export default Certificate
