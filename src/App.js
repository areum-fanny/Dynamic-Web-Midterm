import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import ChampionEntry from './components/ChampionEntry';
import Home from './containers/Home';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/:SummonerName">
          <Home />
        </Route>
        <Route path="/Champion/:championid">
          <Home />
        </Route>
        <Route path="/Items/:itemid">
          <Home />
        </Route>
      </Switch>
    </Router>
    
  );
  
}

export default App;
