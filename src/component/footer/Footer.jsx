import React from "react";
import "./footer.css";

const Footer = () => {
    return (
<footer class="footer">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>About us</h4>
  	 			<ul>
  	 				<li><a href="#">We Are</a></li>
  	 				<li><a href="#">We Do</a></li>
  	 				<li><a href="#">Gallery</a></li>
  	 				<li><a href="#">Contact</a></li>
                    <li><a href="#">Donate</a></li>
  	 			</ul>
  	 		</div>
  	 	 
  	 		<div class="footer-col">
  	 			<h4>Address</h4>
  	 			<ul>
  	 				<li><a><i class="far fa-phone"></i>.  .6263362660, 7828383066 </a></li>
  	 				<li><a><i class="fad fa-envelope-square"></i>. .DAANPATRA18@GMAIL.COM </a></li>
  	 				{/* <li><a ><i class="far fa-map-marker-alt"></i>. .AVWEB World Pvt Ltd, 477, Ranjeet Hanuman Rd, Sector D, Sudama Nagar, Indore</a></li> */}
  	 			</ul>
  	 		</div>
               <div class="footer-col">
  	 			<h4>App </h4>
  	 			<ul>
  	 				<li><a href="#"><i class="fab fa-app-store-ios"></i> Apple store</a></li>
  	 				<li><a href="#"><i class="fab fa-google-play"></i> play store</a></li>

  	 			</ul>
  	 		</div> 
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	
  </footer>

    )
}
export default Footer;