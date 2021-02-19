import React,{useState} from "react";
import './volunteer.css';
import VolunteerGif from "../../assect/volunteer.gif";



const Volunteer = () => {
    const[full_name,setFullName] = useState('');
    const[email,setEmail] = useState('');
    const[phone,setPhone] = useState('');
    const[address,setAddress] = useState('');

    const volunteersumit = (v) =>{
        v.preventDefault();

        let volunteerdata = {full_name,email,phone,address};
        
        fetch("http://127.0.0.1:8000/volunteer/",{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(volunteerdata)
        }).then((result)=>{
          console.log("result",result);
        })

    }
  
  
    return (
        <div className="volunteer">

            <div className="volunteer-form">

                <form onSubmit={(v) => volunteersumit(v)}>

                    <input className="volunteer-input" placeholder="Name" value={full_name} onChange={(e)=>{
            setFullName(e.target.value)}} />
                    <br />
                    <br />
                    <input className="volunteer-input" placeholder="Phone Number" value={phone} onChange={(e)=>{
            setPhone(e.target.value)}}/>
                    <br />
                    <br />
                    <input className="volunteer-input" placeholder="Address" value={address} onChange={(e)=>{
            setAddress(e.target.value)}}/>
                    <br />
                    <br />
                    <input className="volunteer-input" placeholder="Email" value={email} onChange={(e)=>{
            setEmail(e.target.value)}}/>
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