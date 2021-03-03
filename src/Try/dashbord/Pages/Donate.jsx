import React, { useState } from 'react'
import "./donate.css";

function Donate() {


    const [product_category, setProductCategory] = useState("")
    const [quantity, setQuantity] = useState()
    const [pickup_time, setPickupTime] = useState("")
    const [pickup_date, setPickupDate] = useState("")
    const [pickup_address, setPickAddress] = useState("")
    const [product_description, setProductDescription] = useState("")
    const [images, setProductImage] = useState("")



    const donatesubmit = (d) => {
        d.preventDefault();
        console.log({ product_category, quantity, pickup_time, pickup_date, pickup_address, product_description, images });
        let donateData = { product_category, quantity, pickup_time, pickup_date, pickup_address, product_description, images };

        fetch("http://127.0.0.1:8000/donation/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(donateData)
        }).then
        ((result) => {
            console.log("result", result);
        })
    }


    return (
        <div className="donatedashbord">

            <h1>Donate</h1>

            <form onSubmit={(d) => donatesubmit(d)}>

                
                <select className="dashbord-select"
                name="category"  
                id="asd"
                value={product_category}
                onChange={(e) => {setProductCategory(e.target.value)}}>


                    <option value="Cloths" >Clothes</option>
                    <option value="Raw Food" >Raw Food</option>
                    <option value="Utensils" >Utensils</option>
                    <option value="Equipments" >Equipments</option>
                    <option value="Books" >Books</option>
                    <option value="Other" >Other</option>


                </select>
                <br /><br />
                <input className="dashbord-input" type="number" value={quantity} placeholder="Quantity" 
                onChange={(e) => {setQuantity(e.target.value)}} />
                <br /><br />
                <input className="dashbord-input" placeholder="Pick Up Time" value={pickup_time} type="time" required 
                onChange={(e) => {setPickupTime(e.target.value)
                }} />
                <br /><br />
                <input className="dashbord-input" placeholder="Pick Up Date" value={pickup_date} type="date" required onChange={(e) => {
                    setPickupDate(e.target.value)
                }} />
                <br /><br />
                <input className="dashbord-input" placeholder="Pick Up Address" value={pickup_address} onChange={(e) => {
                    setPickAddress(e.target.value)
                }} />
                <br /><br />
                <input className="dashbord-input" placeholder="Discripation" value={product_description} onChange={(e) => {
                    setProductDescription(e.target.value)
                }} />
                <br /><br />
                <input type="file" value={images} onChange={(e) => {
                    setProductImage(e.target.value)
                }} />
                <br /><br />
                <button className="dashbord-button-donate" type="submit">Submit</button>


            </form>


        </div>
    )
}

export default Donate