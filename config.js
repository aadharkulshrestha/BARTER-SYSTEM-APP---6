import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBeB9ZGg2teUGyjKmfE7nBVyfmrL742RBc",
    authDomain: "bartersystem-110bf.firebaseapp.com",
    databaseURL: "https://bartersystem-110bf.firebaseio.com",
    projectId: "bartersystem-110bf",
    storageBucket: "bartersystem-110bf.appspot.com",
    messagingSenderId: "190701153586",
    appId: "1:190701153586:web:3a00d400c033c0154d3b2b",
    measurementId: "G-W4QBVSFXXY"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
