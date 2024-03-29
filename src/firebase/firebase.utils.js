import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDVqDpWKEHsD2fCumD70dYrs5YgO0ikgw8",
  authDomain: "crwn-clothing-e5067.firebaseapp.com",
  databaseURL: "https://crwn-clothing-e5067.firebaseio.com",
  projectId: "crwn-clothing-e5067",
  storageBucket: "crwn-clothing-e5067.appspot.com",
  messagingSenderId: "219284835745",
  appId: "1:219284835745:web:0f1ada103ad338850bcfe0",
  measurementId: "G-SZS0VGXY4Q"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (authUser, addtionalData) => {
  if (!authUser) return;
  const userRef = firestore.doc(`users/${authUser.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = authUser;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addtionalData
      });
    } catch (error) {
        console.log('error while creating user',error.message);
    }
  }
  return userRef; 
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
