import React from 'react';
import HomePage from './Pages/homepage/homepage-component';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import ShopPage from './Pages/shoppage/shoppage.component';
import Header from './Components/header/header.component';
import SignInUpPage from './Pages/sign-in-up-page/signinup.page';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      currentUser:null
    }
  }
  
  componentDidMount(){
      auth.onAuthStateChanged(user => {
        this.setState({currentUser:user});
        console.log(user);
      })
    }

    componentWillUnmount(){
      this.unsubcribeFromAuth();
    }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route path='/sign-in' component={SignInUpPage}/>
        </Switch>
      </div>
    );
  }
  }
  

export default App;
