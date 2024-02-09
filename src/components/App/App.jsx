import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';

function App() {

  return (
    <div className='App'>
    <Router>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Route path="/" exact>
        <Feeling />
      </Route>
      <Route path="/understanding" >
        <Understanding />
      </Route>



    </Router>
    </div>
  );
}

export default App;
