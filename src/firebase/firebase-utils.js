import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB9qeuOw1LjyibXcP7xbs9NxewFkkrKBeE",
    authDomain: "fir-basics-7f215.firebaseapp.com",
    databaseURL: "https://fir-basics-7f215.firebaseio.com",
    projectId: "fir-basics-7f215",
    storageBucket: "fir-basics-7f215.appspot.com",
    messagingSenderId: "200451453036",
    appId: "1:200451453036:web:4c1f3488d6369548"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const SigninWithGoogle = ()=> auth.signInWithPopup(provider);
  
  export default firebase;