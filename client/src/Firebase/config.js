import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyAdcW2-0A0NY0oXsvJTQ1zltxPgcfuzkxs",
    authDomain: "geekquiz-aaedb.firebaseapp.com",
    projectId: "geekquiz-aaedb",
    storageBucket: "geekquiz-aaedb.appspot.com",
    messagingSenderId: "197609618996",
    appId: "1:197609618996:web:2bc83e6dbb295fdfd59461"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const projectStorage = firebase.storage()

  export {
      projectStorage
  }