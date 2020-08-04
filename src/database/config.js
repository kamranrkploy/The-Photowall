import * as firebase from 'firebase';

//using CDN

var firebaseConfig = {
  apiKey: "AIzaSyDlOPAWWtrB1vWg17d3uPWjLxRleh9oCDA",
  authDomain: "thephotowallapp.firebaseapp.com",
  databaseURL: "https://thephotowallapp.firebaseio.com",
  projectId: "thephotowallapp",
  storageBucket: "thephotowallapp.appspot.com",
  messagingSenderId: "582655079973",
  // appId: "1:582655079973:web:e352f12f39739701a171cc",
  // measurementId: "G-754C3MRNWZ"
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export {database}