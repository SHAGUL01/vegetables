import React from "react";
import "./About.css";
import s1 from "../Assets/hero02.png";
import s2 from "../Assets/about.jpg";
import s3 from "../Assets/bg_3.jpg";
import cvv1 from "../Assets/person_1.jpg";
import cvv2 from "../Assets/person_2.jpg";
import cvv3 from "../Assets/person_3.jpg";
import A1A1 from "../Assets/Screenshot (93).png";
import A2A2 from "../Assets/Screenshot (94).png";
import A3A3 from "../Assets/Screenshot (95).png";
import A4A4 from "../Assets/Screenshot (96).png";
const About=()=>{
    return(<div>
{/*ENTRANCE PHOTO*/}
<div className="container-fluid enter">
    <img src={s1} className="img-responsivS" alt="sorry"></img>
<div className="ent">
    <h3>HOME ABOUT US</h3>
    <h1>ABOUT US</h1>
</div>
</div>
{/*ENTRANCE PHOTO end*/}


{/*WELCOME*/}

<div className="container kol">
<div className="row">
     <div className="col-sm-6 ">
     <img src={s2} alt="sorry"></img>
     </div>
     <div className="col-sm-6  moj">
      <h1>Welcome to Vegefoods an<br/> eCommerce website</h1>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
      <p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
       <button className="btn">shop now</button>
     </div>
</div>
</div>
{/*WELCOME END*/}


{/*SABSCRIBE*/}

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
                    <input type="email" spellcheck="false" placeholder="Enter Your Email addres"/>
                    <button type="submit">
                       Subscribe
                    </button>
                </form>
            </div>
        </section>

<div className="jjk">
<img src={s3} alt="sorry"></img>
<div className="hjk">
        <div className="container">
           <div className="row">
            <div className="col-sm-3">
            <h1>10,000</h1>
            <h3>HAPPY CUSTOMERS</h3>
            </div>
            <div className="col-sm-3">
            <h1>100</h1>
            <h3>BRANCHES</h3>
            </div>
            <div className="col-sm-3">
            <h1>1,000</h1>
            <h3>PARTNER</h3>
            </div>
            <div className="col-sm-3">
            <h1>100</h1>
            <h3>AWARDS</h3>
            </div>
           </div>
        </div>
        </div>
        </div>

{/*SABSCRIBE END*/}

{/* Testimony*/} 
<div className="Testimony">
<h2>Testimony</h2>
<h1>Our satisfied customer says</h1>
<h5>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live<br/> the blind texts. Separated they live in</h5>
</div>

<div className="got ">
   <div className="container  ">
       <div className="row">
            <div className="col-sm-4 ">
                <div className="thumbnail">
            <img src={cvv1} alt="Lavender Fields"/>
             <p> Far far away, behind the word mountains,<br/> far from the countries Vokalia and <br/>Consonantia, there live the blind texts.</p>
             <h6>GARRETH SMITH</h6>
             <h5>MARKATING MANAGER</h5>
             </div></div>

             <div className="col-sm-4 ">
             <div className="thumbnail">
             <img src={cvv2} alt="Lavender Fields"/>
             <p> Far far away, behind the word mountains,<br/> far from the countries Vokalia and <br/>Consonantia, there live the blind texts.</p>
             <h6>GARRETH SMITH</h6>
             <h5>ANALYST</h5>
             </div></div>

             <div className="col-sm-4 ">
             <div className="thumbnail">
             <img src={cvv3} alt="Lavender Fields"/>
             <p> Far far away, behind the word mountains,<br/> far from the countries Vokalia and <br/>Consonantia, there live the blind texts.</p>
             <h6>GARRETH SMITH</h6>
             <h5>INTERFACE DESINGER</h5>
             </div> </div>
        </div>
    </div>
</div>

{/*Testimony end*/} 


{/* icons*/ }
<div className="container-fluid rdd">
<div className="row" >
<div className="col-sm-3">
<img src={A1A1} id="fgf" alt="sorry" ></img>
<p>FREE SHIPPING</p>
<h4>ON ORDER OVER $100</h4>
</div>

<div className="col-sm-3">
<img src={A2A2} id="fgf" alt="sorry" ></img>
<p>FREE SHIPPING</p>
<h4>ON ORDER OVER $100</h4>
</div>

<div className="col-sm-3">
<img src={A3A3} id="fgf" alt="sorry" ></img>
<p>FREE SHIPPING</p>
<h4>ON ORDER OVER $100</h4>
</div>

<div className="col-sm-3">
<img src={A4A4} id="fgf" alt="sorry" ></img>
<p>FREE SHIPPING</p>
<h4>ON ORDER OVER $100</h4>
</div>
</div>
</div>


{/* icons ends*/} 



</div>) }
export default About;