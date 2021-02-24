import React, { useState } from 'react'
import "./donate.css";

function Donate() {


    const [product_category, setProductCategory] = useState("")
    const [quantity, setQuantity] = useState("")
    const [pickup_time, setPickupTime] = useState("")
    const [pickup_date, setPickupDate] = useState("")
    const [pickup_address, setPickAddress] = useState("")
    const [product_description, setProductDescription] = useState("")
    const [images, setProductImage] = useState("")



    const donatesubmit = (d) => {
        d.preventDefault();
        console.log({ product_category, quantity, pickup_time, pickup_date, pickup_address, product_description, images });
        let donateData = { product_category, quantity, pickup_time, pickup_date, pickup_address, product_description, images };


        fetch("http://127.0.0.1:8000/admin/DaanpatraApp/donation/", {
            method: 'OPTIONS',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(donateData)
        }).then((result) => {
            console.log("result", result);
        })

    }




    return (
        <div className="donatedashbord">

            <h1>Donate</h1>

            <form onSubmit={(d) => donatesubmit(d)}>

                <select className="dashbord-select" value="product_category" onChange={(e) => {
                    setProductCategory(e.target.value)
                }}>
                    <option>Choose your option</option>
                    <option>Clothes</option>
                    <option>Raw Food</option>
                    <option>Utensils</option>
                    <option>Equipments</option>
                    <option>Books</option>
                    <option>Un-Expired Medicines</option>
                    <option>Other</option>
                </select>
                <br /><br />
                <input className="dashbord-input" type="number" value={quantity} placeholder="Quantity" onChange={(e) => {
                    setQuantity(e.target.value)
                }} />
                <br /><br />
                <input className="dashbord-input" placeholder="Pick Up Time" value={pickup_time} type="time" required onChange={(e) => {
                    setPickupTime(e.target.value)
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