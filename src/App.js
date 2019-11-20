import React from 'react';
import HomePage from './Pages/homepage/homepage-component';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import ShopPage from './Pages/shoppage/shoppage.component';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
