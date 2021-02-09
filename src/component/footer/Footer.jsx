import React from "react";
import "./footer.css";
import {Link} from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="footer">
			<div style={{

				opacity: 0.7
			}}>
				<div style={{backgroundColor : "black"}}>
					<div className="row">
						<div className="footer-col">
							<h4>About us</h4>
							<ul classNameName="ul">
								<li><Link to="/weare">We Are</Link></li>
								<li><Link to="/whatwedo">We Do</Link></li>
								<li><Link to="/galleryhome">Gallery</Link></li>
								<li><Link to="/contact">Contact</Link></li>
								<li><Link to="/login">Donate</Link></li>
							</ul>
						</div>

						<div className="footer-col">
							<h4>Address</h4>
							<ul classNameName="ul">
								<li><a><i className="far fa-phone"></i>.  .6263362660, 7828383066 </a></li>
								<li><a><i className="fad fa-envelope-square"></i>. .DAANPATRA18@GMAIL.COM </a></li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>App </h4>
							<ul classNameName="ul">
								<li><a href="#"><i className="fab fa-app-store-ios"></i> Apple store</a></li>
								<li><a href="#"><i className="fab fa-google-play"></i> play store</a></li>

							</ul>
						</div>
						<div className="footer-col">
							<h4>follow us</h4>
							<div className="social-links">
								<a href="#"><i className="fab fa-facebook-f"></i></a>
								<a href="#"><i className="fab fa-twitter"></i></a>
								<a href="#"><i className="fab fa-instagram"></i></a>
								<a href="#"><i className="fab fa-youtube"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer >

	)
}
export default Footer;