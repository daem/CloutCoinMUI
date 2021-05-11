import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyCQ6Ghyg-Y7FAA3GSyuyZErxkEzvWOjf60",
  authDomain: "cloutcoin-1e045.firebaseapp.com",
  projectId: "cloutcoin-1e045",
  storageBucket: "cloutcoin-1e045.appspot.com",
  messagingSenderId: "1008994815390",
  appId: "1:1008994815390:web:93086d54682a2954cbda8f",
  measurementId: "G-1M57JJ6MXY",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
