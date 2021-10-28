import * as firebase from "firebase";

const firebaseConfig = {

  apiKey: "AIzaSyCcUTgdtzTV6VtdjjGlIMh2YXGDSy1RPuY",

  authDomain: "react-app-cd1c3.firebaseapp.com",

  databaseURL: "https://react-app-cd1c3-default-rtdb.firebaseio.com",

  projectId: "react-app-cd1c3",

  storageBucket: "react-app-cd1c3.appspot.com",

  messagingSenderId: "1048784985686",

  appId: "1:1048784985686:web:1395d7f86e7b55efe8e5f7",

  measurementId: "G-CKB3YYV4SE"

};



  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();