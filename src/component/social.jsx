import React from 'react';
import './Social.css';

const Social = () =>{
    return(
        <>
                <div id="idebar">
  <div className="social facebook">
    <a href=" https://www.facebook.com " target="_blank">
      <p>Like on Facebook <i className="fa fa-facebook "></i> </p>
    </a>
  </div>
  <div className="social twitter">
    <a href=" https://www.twitter.com " target="_blank">
      <p>Follow on Twitter<i className="fa fa-twitter"></i> </p>
    </a>
  </div>
  
  <div className="social youtube">
    <a href=" https://www.youtube.com " target="_blank">
      <p> Subscribe on Youtube   .<i className="fa fa-youtube-play"></i> </p>
    </a>
  </div>
  <div className="social linkedin">
    <a href=" https://www.instagram.com " target="_blank">
      <p>Connect on Instagram    . <i className="fa fa-instagram" ></i> </p>
    </a>
  </div>
</div>
        </>
    )
};

export default Social;