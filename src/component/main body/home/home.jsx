import React from "react";
import "./home.css";
import Slide from "./slide";
import Bounce from 'react-reveal/Bounce';
import Weare from "../weare/Weare";
import WhatWeDo from "../../We do/Whatwedo";
import Gallery from "../../image/Image";
import News from "../news/News";


const Home = () =>{

    
   
    return(
        <>
    <div className="background" id="home">
       <Bounce><Slide /></Bounce> 
    </div>
    <Weare />
       <WhatWeDo />
       <News />
       <Gallery />
       </>
)
    
}
export default Home;
