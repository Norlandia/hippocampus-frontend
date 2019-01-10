import React from 'react';
import { NavLink } from "react-router-dom";
import './paper.css';

const Paper2 = () => (
  <div className="paper">
    <h1>Sign Up</h1>
    <div className="paperInputContainer">
      <label for="email">E-mail</label>
        <input id="email" type="email"/>
      <label for="password">Password</label>
        <input id="password" type="password"/>
      <label for="password2">Password Again</label>
        <input id="password2" type="password"/>
      <button className="loginButton">Sign Up</button>  
    </div>
    <div className="signUpLink">
      <li className="bottomLink"><NavLink className="bottomLink" to="/">Already have an account?</NavLink></li>    
    </div>
  </div>
);

export default Paper2;