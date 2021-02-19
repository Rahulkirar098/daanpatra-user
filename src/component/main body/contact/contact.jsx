import React, {useState} from "react";
import "./contact.css";
import ContactImage from "../../../assect/Contact.gif";

const Contact = () => {

  const[first_name,setFristName] = useState('');
  const[last_name,setLastName] = useState('');
  const[email,setEmail] = useState('');
  const[phone,setPhone] = useState('');
  const[discription,setDiscription] = useState('');


  const contactsubmit = (e) =>{
    e.preventDefault();
    console.log("asdfgh")
        console.log(first_name,last_name,email,phone,discription);
        
        let data = {first_name,last_name,email,phone,discription};

        fetch("http://127.0.0.1:8000/contact/",{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(data)
        }).then((result)=>{
          console.log("result",result);
        })
      }


    return (

      <div className="contact">

        <div className="contact-left">
            <img src={ContactImage} alt="logo" />
        </div>

        <div className="contact-right">
        

        <form onSubmit={(e) => contactsubmit(e)} >

          <input className="input-name" placeholder="Frist Name" value={first_name} onChange={(e)=>{
            setFristName(e.target.value)}} />

          <input className="input-name" placeholder="Last Name" value={last_name} onChange={(e)=>{
            setLastName(e.target.value)}}/>
          <br />
          <br />
          <input className="input-all" placeholder="Email Address" value={email} onChange={(e)=>{
            setEmail(e.target.value)}}/>
          <br />
          <br />
          <input className="input-all" placeholder="Phone Number" value={phone} onChange={(e)=>{
            setPhone(e.target.value)}}/>
          <br />
          <br />
          <input className="input-discripation" placeholder="Discription" value={discription} onChange={(e)=>{
            setDiscription(e.target.value)}}/>
          <br />
          <br />
          <button type="submit" >Submit</button>
        
          </form>

          </div>


      </div>
          

    )


}
export default Contact;