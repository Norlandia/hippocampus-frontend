import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './index.css';
import PaperLogin from './loginScreen/components/paper/paperLogin';
import PaperImage from './loginScreen/components/paper/paperImage';
import PaperSignUp from './loginScreen/components/paper/paperSignUp';


function LoginRender() {
return (
  <Router>
    <div>
      <h1 className="header"> Hippocampus</h1>
      <PaperImage/>
      <Route exact path="/" component={PaperLogin}/>
      <Route path="/signup" component={PaperSignUp}/>
      <a className="footer" href="/">Designed and created by | Kriszta Nemeth | Nora Puskas | Peter Antal</a>
    </div>
  </Router>
)};

export default LoginRender;