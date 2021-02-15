import React from 'react'
import "./donate.css";
import { TextField } from "@material-ui/core";

function Donate() {
    return (
        <div className="donatedashbord">

                     <h1>Donate</h1>

                    <form>

                        <input className="dashbord-input" placeholder="Product Type" />
                        <br/><br/>
                        <input className="dashbord-input" placeholder="Quantity" />
                        <br/><br/>
                        <input className="dashbord-input" placeholder="Pick Up Time" />
                        <br/><br/>
                        <input className="dashbord-input" placeholder="Pick Up Date" />
                        <br/><br/>
                        <input className="dashbord-input" placeholder="Pick Up Address" />
                        <br/><br/>
                        <input className="dashbord-input" placeholder="Discripation" />
                        <br/><br/>
                        <button className="dashbord-button-donate" type="submit">Submit</button>
                       

                    </form>
            

        </div>
    )
}

export default Donate