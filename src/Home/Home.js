import React from "react";
import "./Home.css";
import AQAQ from "../Assets/vi (2).mp4";
import A1A1 from "../Assets/Screenshot (93).png";
import A2A2 from "../Assets/Screenshot (94).png";
import A3A3 from "../Assets/Screenshot (95).png";
import A4A4 from "../Assets/Screenshot (96).png";
import p1 from "../Assets/category-1.jpg";
import p2 from "../Assets/category-2.jpg";
import a1 from "../Assets/category.jpg";
import s1 from "../Assets/category-3.jpg";
import s2 from "../Assets/category-4.jpg";
import cv1 from "../Assets/product-1.jpg";
import cv2 from "../Assets/product-2.jpg";
import cv3 from "../Assets/product-3.jpg";
import cv4 from "../Assets/product-4.jpg";
import cv5 from "../Assets/product-5.jpg";
import cv6 from "../Assets/product-6.jpg";
import cv7 from "../Assets/product-7.jpg";
import cv8 from "../Assets/product-8.jpg";
import cv9 from "../Assets/product-9.jpg";
import cv10 from "../Assets/product-10.jpg";
import cv11 from "../Assets/product-11.jpg";
import cv12 from "../Assets/product-12.jpg";
import cvv1 from "../Assets/person_1.jpg";
import cvv2 from "../Assets/person_2.jpg";
import cvv3 from "../Assets/person_3.jpg";





const Home =()=>{
    return(<div>
        
{  /*ENTRANCE FRUITS */     }          
<div className="bgcontainer">
    <  video id="ds" src={AQAQ}  autoPlay loop muted/>
             <div className="rdcontainer">
                  <h3 className="wlc">we serve fresh vegestables & fruits</h3>
                  <h3 id="title">WE DELIVER ORGANIC VEGESTABLES & FRUITS </h3>
                  <button id="re" className="btn">view details</button>
            </div>
</div>
 {/*ENTRANCE FRUITS END */  }  

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

{/* vagitables*/} 
<div className="container cvc">
<div className="row" >
  <div className="col-sm-4">
  <img src={p1} id="fgff" alt="sorry" ></img>
 <button className="btn fdg"> Fruits</button>
  <img src={p2} id="fgff" className="pop" alt="sorry" ></img>
   <button className="btn  fdg">Vegetables</button>

  </div>
  <div className="col-sm-4">
  <h2 className="df">Vegetables</h2>
<p className="fd">Protect the health of every home</p>
<button className="btn  fdg">shop now</button>

  <img src={a1} id="fgff" alt="sorry" ></img>
  </div>
  <div className="col-sm-4">
  <img src={s1} id="fgfff" alt="sorry" ></img>
  <button className="btn fdg"> Juices</button>

  <img src={s2} id="fgfff" className="pop" alt="sorry" ></img>
  <button className="btn fdg">Dried  </button>

  </div>
</div>
</div>
{/* vagitables end*/} 

{/* Featured Products*/} 
<div className="ddd">
<h3>Featured Products</h3>
<h1>Our Products</h1>
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
</div>


<div class="articles">
        <article>
            <figure>
                <img src={cv1} alt="Lavender Fields"/>
            </figure>
            <div class="article-preview">
                <h2>BELL PEPPER</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Praesent in mauris eu tortor porttitor accumsan.
                </p>
                <button id="re" className="btn">buy now</button>

            </div>
        </article>
        <article>
            <figure>
            <img src={cv2} alt="Lavender Fields"/>
            </figure>
            <div class="article-preview">
                <h2>STRAWBERRY</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Praesent in mauris eu tortor porttitor accumsan.
                </p>
                <button id="re" className="btn">buy now</button>

            </div>
        </article>
        <article>
            <figure>
            <img src={cv3} alt="Lavender Fields"/>
            </figure>
            <div class="article-preview">
                <h2>GREEN BEANS</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Praesent in mauris eu tortor porttitor accumsan.
                </p>
                <button id="re" className="btn">buy now</button>

            </div>
        </article>
        <article>
            <figure>
            <img src={cv4} alt="Lavender Fields"/>
            </figure>
            <div class="article-preview">
                <h2>PURPLE CABBAGE</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor
                    accumsan.
                </p>
                <button id="re" className="btn">buy now</button>

            </div>
        </article>
        <article>
            <figure>
            <img src={cv5} alt="Lavender Fields"/>
            </figure>
            <div class="article-preview">
                <h2>TOMATOE</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor
                    accumsan.
                </p>
                <button id="re" className="btn">buy now</button>

            </div>
        </article>
        <article>
            <figure>
            <img src={cv6} alt="Lavender Fields"/>
            </figure>
            <div class="article-preview">
                <h2>BROCOLLI</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor
                    accumsan.
                </p>
                <button id="re" className="btn">buy now</button>

            </div>
        </article>
        <article>
            <figure>
            <img src={cv7} alt="Lavender Fields"/>
            </figure>
            <div class="article-preview">
                <h2>CARROTS</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor
                    accumsan.
                </p>
                <button id="re" className="btn">buy now</button>

            </div>
        </article>
        <article>
            <figure>
            <img src={cv8} alt="Lavender Fields"/>
            </figure>
            <div class="article-preview">
                <h2>FRUIT JUICE</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor
                    accumsan.
                </p>
                <button id="re" className="btn">buy now</button>

            </div>
        </article>
        <article>
            <figure>
            <img src={cv9} alt="Lavender Fields"/>
            </figure>
            <div class="article-preview">
                <h2>Freezing Forest</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor
                    accumsan.
                </p>
                <button id="re" className="btn">buy now</button>

            </div>
        </article>
        <article>
            <figure>
            <img src={cv10} alt="Lavender Fields"/>
            </figure>
            <div class="article-preview">
                <h2>Freezing Forest</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor
                    accumsan.
                </p>
                <button id="re" className="btn">buy now</button>

            </div>
        </article>
        <article>
            <figure>
            <img src={cv11} alt="Lavender Fields"/>
            </figure>
            <div class="article-preview">
                <h2>Freezing Forest</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor
                    accumsan.
                </p>
                <button id="re" className="btn">buy now</button>

            </div>
        </article>
        <article>
            <figure>
            <img src={cv12} alt="Lavender Fields"/>
            </figure>
            <div class="article-preview">
                <h2>Freezing Forest</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor
                    accumsan.
                </p>
                <button id="re" className="btn">buy now</button>

            </div>
        </article>
        
    </div>
{/* Featured Products end*/} 


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




















</div>) }
export default Home;