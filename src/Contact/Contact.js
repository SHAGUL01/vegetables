import React from "react";
import "./Contact.css";
import s1 from "../Assets/hero02.png";

const Contact=()=>{
    return(<div>




{/*ENTRANCE PHOTO*/}
<div className="container-fluid enter">
    <img src={s1} className="img-responsivS" alt="sorry"></img>
<div className="ent">
    <h3>HOME CONTACT US</h3>
    <h1>CONTACT</h1>
</div>
</div>
{/*ENTRANCE PHOTO end*/}

{/*Address*/}
<div className="container-fluid vnb">
    <div className="row">
<div className="col-sm-3">
<h3><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</h3>
</div>
<div className="col-sm-3">
<h3>Phone: + 1235 2355 98</h3>
</div>
<div className="col-sm-3">
<h3>Email: info@yoursite.com</h3>
</div>
<div className="col-sm-3">
<h3>Website yoursite.com</h3>
</div>
    </div>
</div>
{/*Addressend*/}

<div className="container form_form">
            <form>
              <div className="form-group">
                <input type="text" class="form-control" placeholder="Your Name"/>
              </div>
              <div className="form-group">
                <input type="text" class="form-control" placeholder="Your Email"/>
              </div>
              <div className="form-group">
                <input type="text" class="form-control" placeholder="Subject"/>
              </div>
              <div className="form-group">
                <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
              </div>
              <div className="form-group">
                <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5"/>
              </div>
            </form>    
          </div>

</div>) }
export default Contact;