import React from "react";
import './volunteer.css';
import VolunteerGif from "../../assect/volunteer.gif";



const Volunteer = () => {
    return (
        <div className="volunteer">

            <div className="volunteer-form">

                <form>
                    <input className="volunteer-input" placeholder="Name" />
                    <br />
                    <br />
                    <input className="volunteer-input" placeholder="Phone Number" />
                    <br />
                    <br />
                    <input className="volunteer-input" placeholder="Address" />
                    <br />
                    <br />
                    <input className="volunteer-input" placeholder="Email" />
                    <br />
                    <br />
                    <button type="submit" >Submit</button>
                </form>

            </div>

            <div className="right-volunteer">

                
            <img src={VolunteerGif} alt="img" />
            
            </div>

        </div>
    )
};

export default Volunteer;