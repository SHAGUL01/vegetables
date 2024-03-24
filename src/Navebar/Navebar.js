import React from "react";
import "./Navebar.css";
import { Link } from "react-router-dom";



const Navebar =()=>{
    return(
        <div>   
            

<nav class="navbar  navbar-fixed-top tt">
  <div class="container-fluid">
    <div class="navbar-header">

		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mynavbar" >
			    <span class="icon-bar"></span>
			    <span class="icon-bar"></span>
			    <span class="icon-bar"></span>
		</button>

     <ul class="navbar-brand "><Link to="/" className=" apple" >VEGEFOODS</Link></ul>
    </div>
    <div class="collapse navbar-collapse" id="mynavbar">


    <ul class="nav navbar-nav navbar-right" >
        <li ><Link to="/" id="e">HOME</Link></li>
      <li><Link to="/Shop" id="e">SHOP</Link></li>
      <li ><Link to="/About" id="e">ABOUT</Link></li>
       <li ><Link to="/Blog" id="e">BLOG</Link></li>
       <li ><Link to="/Contact" id="e">CONTACT</Link></li>


    </ul>
    </div>
  </div>
  
</nav>


<div className="container-fluid">
    <div className="row">
        <div className="col-sm-4">
           <p id="df"> call: + 1235 2355 98</p>
        </div>
        <div className="col-sm-4">
           <p id="df">YOUREMAIL@EMAIL.COM</p>
        </div>
        <div className="col-sm-4">
           <p id="df">3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</p>
        </div>
    </div>
</div>






</div>) }
export default Navebar;