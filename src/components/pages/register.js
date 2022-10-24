import React from 'react';
import '../css/login.scss';
import { useParams } from "react-router-dom";
import {NavLink} from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {

  const navigate = useNavigate();

  async function register(){
    let username = document.querySelectorAll('input[type=text]')[0].value;
    let email = document.querySelectorAll('input[id=email-temp]')[0].value;
    let password = document.querySelectorAll('input[type=password]')[0].value;
    let response = await fetch(`http://localhost:80/xweb/PHP/Register`, {
      method: 'POST',
      credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `username=${username}&email=${email}&password=${password}`,
    }).then(response => response.json());

    if(response.indexOf("Success") != -1) {
      navigate(-1);
      toast.success ('You have been successfully registered and logged in');
    }
    else{
      toast.warning ('Something went wrong');
    }
  }

  async function checkAvailability(){
    let username = document.querySelectorAll('input[type=text]')[0].value;
    let email = document.querySelectorAll('input[id=email-temp]')[0].value;
    let response = await fetch(`http://localhost:80/xweb/PHP/Availability_Checker`, {
       method: 'POST',
       headers: {
         "Content-Type": "application/x-www-form-urlencoded"
       },
       body: `username=${username}&email=${email}`,
     }).then(response => response.text());
     
     toast.dismiss();

    if (response.indexOf("E") > -1)
      toast.warning("Current Email already exists in our database");
     
    else if (response.indexOf("U") > -1)
      toast.warning("Current Username already exists in our database");
     
    else if (response.indexOf("U") > -1 && response.indexOf("E") > -1)
      toast.warning("Current Username and Email already exists in our database");
     
}

  return(
<div className="login_wrapper">
      <div id="obrazek">
        <div id="sekcja">
          <div class="sekcja-zb">
            <h1 class="tekst">
              <hr class="paski" />
              <strong>WELCOME ON ANIDOJO!</strong>
               <hr class="paski" />
            </h1>   
          </div>
        </div>
      </div>
      <div id="ls">
        <div id="zal">
          <div class="logo_container">
            <NavLink to="/" className='logo'>
            <img  src="https://i.ibb.co/5rn0WgX/logo.png"  style={{marginRight: 10}} width="35" height="35" alt="bg" /><span style={{fontFamily: 'Changa'}}><span style={{color:'#40F1B9'}}>ANI</span>DOJO</span>
          </NavLink>
          </div>
          <form >
            <div >
              <label > UserName</label>
              <input type="text" class="pol-teks" onChange={ () => checkAvailability()} required="true" placeholder="UserName"/>
            </div>
            <div >
              <label >E-mail</label>
              <input type="email" id='email-temp' onChange={ () => checkAvailability()} class="pol-teks" required="true" placeholder="Email"/>
            </div>
            <div >
              <label > Password </label>
              <input type="password" class="pol-teks" required="true" placeholder="password" />
            </div>
            <div >
              <label > Repeat password </label>
              <input type="password" class="pol-teks" required="true" placeholder="re-type password" />
            </div>
            <button type="button" onClick={ () => register()} class="loguj">SIGN UP</button>
          </form>
          <div class="or">
            <hr class="paski" />
            <span>YOU ALREADY HAVE A ACCOUNT?</span>
            <hr class="paski" />
          </div>
          <NavLink to='/login' className="utw" >
                    LOGIN TO YOUR ACCOUNT
                 </NavLink>
        </div>
        <footer id="stopka">
          <p>Copyright &copy; 2022, <span style={{fontFamily: 'Changa'}}><span style={{color:'#40F1B9'}}>ANI</span>DOJO</span>, All rights reserved</p>
        </footer>
      </div>
    </div> 
    );
};

export default RegisterForm;