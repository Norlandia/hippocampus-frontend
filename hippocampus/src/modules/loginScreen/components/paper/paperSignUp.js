import React from 'react';
import { NavLink } from "react-router-dom";
import PaperImage from './paperImage';
import {reg} from '../../../../core/ApiHelper';
import './paper.css';

const Paper2 = () => (
  <div>
      <h1 className="header"> Hippocampus</h1>
      <PaperImage/>     
  <div className="paper" name="signup">
    <h1>Sign Up</h1>
    <div className="paperInputContainer">
    <label for="firstName">First Name</label>
        <input id="firstName" type="firstName"/>
      <label for="lastName">Last Name</label>
        <input id="lastName" type="lastName"/>
      <label for="email">E-mail</label>
        <input id="email" type="email"/>
      <label for="password">Password</label>
        <input id="password" type="password"/>
      <label for="password2">Password Again</label>
        <input id="password2" type="password"/>
      <button className="loginButton" onClick={reg}>Sign Up</button>  
    </div>
    <div className="signUpLink">
      <li className="bottomLink"><NavLink className="bottomLink" to="/">Already have an account?</NavLink></li>    
    </div>
  </div>
  <a className="footer" href="/">Designed and created by | Kriszta Nemeth | Nora Puskas | Peter Antal | David Czeller | Special thanks to KOND</a>
  
  </div>
);

export default Paper2;
