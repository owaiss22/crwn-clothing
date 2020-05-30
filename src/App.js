import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/Shop/Shop';
import SignInAndSignUpPage from './Pages/SignInAndSignUp/SignInAndSignUp';
import Header from './Components/Header/Header';


import './App.css'; 

function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
