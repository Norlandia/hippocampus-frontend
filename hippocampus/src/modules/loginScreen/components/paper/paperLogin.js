import React from 'react';
import { NavLink } from "react-router-dom";
import PaperImage from './paperImage';
import './paper.css';


const Paper = () => (
  <div>
      <h1 className="header"> Hippocampus</h1>
      <PaperImage/>      
  <div className="paper">
    <h1>Login</h1>
    <div className="paperInputContainer">
      <label for="email">E-mail</label>
        <input id="email" type="email"/>
      <label for="password">Password</label>
        <input id="password" type="password"/>
      <button className="loginButton">Enter</button>  
    </div>
    <li className="bottomLink"><NavLink className="bottomLink" to="/signup">Doesn't have an account yet?</NavLink></li>
  </div>
  <a className="footer" href="/">Designed and created by | Kriszta Nemeth | Nora Puskas | Peter Antal | David Czeller | Special thanks for KOND</a>
  </div>
);

export default Paper;