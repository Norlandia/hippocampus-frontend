import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Game from '../containers/Board';
import PaperLogin from '../modules/loginScreen/components/paper/paperLogin';
import PaperSignUp from '../modules/loginScreen/components/paper/paperSignUp';
import './App.css';



const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={PaperLogin}/>
        <Route path="/signup" component={PaperSignUp}/>
        <Route path="/game" component={Game} />
      </div>
    </Router>
  );
};

export default AppRouter;
