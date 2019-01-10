import React from 'react';
import React, { Component } from 'react';
import Board from '../containers/Board';
import LoginScreen from '../modules/index';
import './App.css';

const App = () => {
  return (
    <div>
     <LoginScreen/>
     <Board />
    </div>
  );
};


export default App;