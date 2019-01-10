import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route path="/game" component={App} />
      </div>
    </Router>
  );
};

export default AppRouter;
