import React from 'react';
import { NavLink } from 'react-router-dom';
import PaperImage from './paperImage';
import { login } from '../../../../core/ApiHelper';
import './paper.css';

const Paper = () => (
  <div>
    <h1 className="header"> Hippocampus</h1>
    <PaperImage />
    <div className="paper">
      <h1>Login</h1>
      <div className="paperInputContainer">
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <button className="loginButton" onClick={login}>
          Enter
        </button>
      </div>
      <li className="bottomLink">
        <NavLink className="bottomLink" to="/signup">
          Doesn't have an account yet?
        </NavLink>
      </li>
    </div>
    <a className="footer" href="/">
      Designed and created by | Kriszta Nemeth | Nora Puskas | Peter Antal |
      David Czeller | Special thanks to KOND
    </a>
  </div>
);

export default Paper;
