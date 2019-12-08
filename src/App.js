import React from "react";
import HomePage from "./Pages/homepage/homepage-component";
import { Switch, Route,Redirect } from "react-router-dom";
import "./App.css";
import ShopPage from "./Pages/shoppage/shoppage.component";
import Header from "./Components/header/header.component";
import SignInUpPage from "./Pages/sign-in-up-page/signinup.page";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  unsubcribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });

      } else {
         setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/sign-in" render={()=> this.props.currentUser ? (<Redirect to='/'/>) : (<SignInUpPage/>)}/>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({user})=> ({
  currentUser:user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
