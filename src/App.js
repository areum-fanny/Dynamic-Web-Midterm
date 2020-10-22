import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
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
        <Route path="/:ChampionName">
          <Home />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
