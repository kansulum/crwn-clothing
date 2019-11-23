import React from 'react';
import HomePage from './Pages/homepage/homepage-component';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import ShopPage from './Pages/shoppage/shoppage.component';
import Header from './Components/header/header.component';
import SignInUpPage from './Pages/sign-in-up-page/signinup.page';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
        <Route path='/sign-in' component={SignInUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
