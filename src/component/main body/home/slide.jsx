import React from 'react';
import "./slide.css";
import { Carousel } from 'react-responsive-carousel';
import slide1 from "../../../assect/slide1.jpg";
import slide2 from "../../../assect/slide2.jpg";
import slide3 from "../../../assect/slide3.jpg";
import slide4 from "../../../assect/slide4.jpg";
import slide5 from "../../../assect/slide5.jpg";

export default () => (
    <div className="carouselcss" >
    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} dynamicHeight={false}>
        <div >
            <img className="carousel_img" alt="" src={slide3} />
            {/* <Slide bottom><p className="legend">Daanpatra Foundation is not-for-profit organisation headquartered in indore</p></Slide> */}
        </div>
        <div >
            <img className="carousel_img" alt="" src={slide2} />
            {/* <p className="legend">Daanpatra Foundation is not-for-profit organisation headquartered in indore</p> */}
        </div>
        <div >
            <img className="carousel_img" alt="" src={slide1} />
            {/* <p className="legend">Daanpatra Foundation is not-for-profit organisation headquartered in indore</p> */}
        </div>
        <div >
            <img className="carousel_img" alt="" src={slide4} />
        </div>
        <div >
            <img className="carousel_img" alt="" src={slide5} />
        </div>
        
    </Carousel>
    </div>
);

