import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7Wm-Q3ujH2SiEEHA71SRrCBt8jTORV8k",
  authDomain: "allnotes-d605d.firebaseapp.com",
  databaseURL: "https://allnotes-d605d.firebaseio.com",
  projectId: "allnotes-d605d",
  storageBucket: "allnotes-d605d.appspot.com",
  messagingSenderId: "881066859944",
  appId: "1:881066859944:web:b90fad80453f5b20e4d19d",
  measurementId: "G-P19JE3YQQ1",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
