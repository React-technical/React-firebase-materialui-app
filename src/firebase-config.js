import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD662Crh3GZloUG4cpPbHn6AgkdShgSx5g",
    authDomain: "react-firebase-materialui-app.firebaseapp.com",
    projectId: "react-firebase-materialui-app",
    storageBucket: "react-firebase-materialui-app.appspot.com",
    messagingSenderId: "665197484735",
    appId: "1:665197484735:web:0d0b78d40292fcf070c40a",
    measurementId: "G-JR7G46VBCK"
  });

  const db = firebaseApp.firestore();
  export default db;