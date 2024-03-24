import React from "react";
import "./Footer.css";
import s1 from "../Assets/logo (1).png";
import s2 from "../Assets/logo (2).png";
import s3 from "../Assets/logo (3).png";
import s4 from "../Assets/logo (4).png";


const Footer =()=>{
    return(<div>


<section class="subscription-section">
            <div class="subscription-wrapper">
                <div class="subscription__description">
                    <h2>
                    Subcribe to our Newsletter
                    </h2>
                    <p>
                    Get e-mail updates about our latest shops and special offers
                    </p>
                </div>
                <form class="subscribe-form">
                    <input type="email" spellcheck="false" placeholder="Your Email"/>
                    <button type="submit">
                       Subscribe
                    </button>
                </form>
            </div>
        </section>

<footer>
    <div className="container-fluid">
     <div className="row">
<div className="col-sm-4">
<h2 class="ftco-heading-2">Menu</h2>
              <ul class="list-unstyled">
                <li><a href="#" >Shop</a></li>
                <li><a href="#" >About</a></li>
                <li><a href="#" >Journal</a></li>
                <li><a href="#" >Contact Us</a></li>
              </ul>
</div>
<div className="col-sm-4">
<h2 class="ftco-heading-2">Menu</h2>
              <ul class="list-unstyled">
                <li><a href="#" >Shop</a></li>
                <li><a href="#" >About</a></li>
                <li><a href="#" >Journal</a></li>
                <li><a href="#" >Contact Us</a></li>
              </ul>
</div>
<div className="col-sm-4">
<h2 class="ftco-heading-2">Menu</h2>
              <ul class="list-unstyled">
                <li><a href="#" >Shop</a></li>
                <li><a href="#" >About</a></li>
                <li><a href="#" >Journal</a></li>
                <li><a href="#" >Contact Us</a></li>
              </ul>
</div>
     </div>
    </div>
</footer>



    
</div>) }
export default Footer;