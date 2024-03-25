import React from "react";
import "./Footer.css";
import s1 from "../Assets/logo (1).png";
import s2 from "../Assets/logo (2).png";
import s3 from "../Assets/logo (3).png";
import s4 from "../Assets/logo (4).png";


const Footer =()=>{
    return(<div>


<section className="subscription-section">
            <div className="subscription-wrapper">
                <div class="subscription__description">
                    <h2>
                    Subcribe to our Newsletter
                    </h2>
                    <p>
                    Get e-mail updates about our latest shops and special offers
                    </p>
                </div>
                <form className="subscribe-form">
                    <input type="email" spellcheck="false" placeholder="Your Email"/>
                    <button type="submit">
                       Subscribe
                    </button>
                </form>
            </div>
        </section>

        <footer className="footer">
  	 <div className="container wtt">
  	 	<div className="row woo">

  	 		<div className="footer-col">
  	 			<h4>Vegefoods</h4>
  	 			<ul className="vdo">
  	 				<li><a href="#">Far far away, behind the word <br/>mountains, far from the<br/> countries Vokalia and<br/> Consonantia.

</a></li>
  	 			
  	 			</ul>
  	 		</div>
            
  	 		<div className="footer-col">
  	 			<h4>Menu</h4>
  	 			<ul className="vdo">
  	 				<li><a href="#">Shop</a></li>
  	 				<li><a href="#">About</a></li>
  	 				<li><a href="#">Journal</a></li>
  	 				<li><a href="#">Contact Us</a></li>
  	 				<li><a href="#">Activities</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Help</h4>
  	 			<ul className="vdo">
  	 				<li><a href="#">Shipping Information</a></li>
  	 				<li><a href="#">Returns & Exchange</a></li>
  	 				<li><a href="#">Terms & Conditions</a></li>
  	 				<li><a href="#">Privacy Policy</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i > <img src={s1} alt="sorry" ></img></i></a>
  	 				<a href="#"><i ><img src={s2} alt="sorry" ></img></i></a>
  	 				<a href="#"><i ><img src={s3} alt="sorry" /></i></a>
  	 				<a href="#"><i ><img src={s4} alt="sorry" /></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
     <center className="vod">Copyright ©2024 All rights reserved</center>
  </footer>


    
</div>) }
export default Footer;
