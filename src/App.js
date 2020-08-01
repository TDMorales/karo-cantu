import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import HomePage from './components/homepage/homepage'

const PhotographyPage = () => (
  <div>
      <h1>PHOTOGRAPHY</h1>
  </div>
);

function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/> 
        <Route path='/photography' component={PhotographyPage}/>
      </Switch>    
    </div>
  );
}

export default App;