import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import HomePage from './Pages/HomePage/HomePage';


import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats Page </h1>
  </div>
)

function App() {
  return (
    <div style={{marginTop: '20px'}}>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
