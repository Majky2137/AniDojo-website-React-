import React from 'react';
import '../css/login.css';
import {Link, NavLink} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  let navigate = useNavigate();

  async function login(){
    let login = document.querySelectorAll('input[type=text]')[0].value;
    let password = document.querySelectorAll('input[type=password]')[0].value;
    let response = await fetch(`http://localhost:80/xweb/PHP/Login`, {
      method: 'POST',
      credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `login=${login}&password=${password}`,
    }).then(response => response.json());

    if(response.indexOf("Welcome") != -1)
      navigate(-1);
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
            <img  src="https://i.ibb.co/b5wVJ6q/logo.png"  style={{marginRight: 10}} width="35" height="35" alt="bg" /><span style={{fontFamily: 'Poppins'}}><span style={{color:'#BE4242'}}>ANI</span>DOJO</span>
          </NavLink>
          </div>
          <form >
            <div >
              <label > UserName / E-mail </label>
              <input type="text" class="pol-teks" required="true" placeholder="Login"/>
            </div>
            <div >
              <label > Password </label>
              <input type="password" class="pol-teks" required="true" placeholder="Password" />
            </div>
            <button type="button" onClick={ () => login()} class="loguj">SIGN IN</button>
          </form>
          <div class="linki">
            <NavLink to='#'> I FORGOT THE PASSWORD </NavLink>
          </div>
          <div class="or">
            <hr class="paski" />
            <span>YOU DON'T HAVE AN ACCOUNT?</span>
            <hr class="paski" />
          </div>
          <NavLink to='/register' className="utw" >
                    REGISTER NOW
                 </NavLink>
        </div>
        <footer id="stopka">
          <p>Copyright &copy; 2022, <span style={{fontFamily: 'Poppins'}}><span style={{color:'#BE4242'}}>ANI</span>DOJO</span>, All rights reserved</p>
        </footer>
      </div>
    </div> 
    );
};

export default LoginForm;