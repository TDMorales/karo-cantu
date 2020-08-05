import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC4W5l66cyRJ248Bw5kX88hXs1a-K9v8CY",
    authDomain: "karo-db.firebaseapp.com",
    databaseURL: "https://karo-db.firebaseio.com",
    projectId: "karo-db",
    storageBucket: "karo-db.appspot.com",
    messagingSenderId: "896021176115",
    appId: "1:896021176115:web:1d296aaf66e512a4f6e846",
    measurementId: "G-K5XKT7CNTD"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
