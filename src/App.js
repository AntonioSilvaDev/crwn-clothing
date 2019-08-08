import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = (props) => (
  <h1>Hey there mr bill!!!</h1>
  );

function App(props) {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/hats" component={HatsPage}/> 
      </Switch>
    </div>
  );
}

export default App;
