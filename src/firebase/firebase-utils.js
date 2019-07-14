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

 export const createUserProfileDocument = async (userAuth,...additionalData)=>{
      if(!userAuth) return;

      const userRef = firestore.doc(`user/${userAuth.uid}`)
      const snapShot = await userRef.get();

      if(!snapShot.exists){
          const {displayName,email} = userAuth;
          const createdAt = new Date();
          try {
              userRef.set({
                  displayName,
                  email,createdAt,
                  ...additionalData
              })
          } catch (error) {
              console.log('error creating user');
              
              
          }
      }
      return userRef;
  }
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const SigninWithGoogle = ()=> auth.signInWithPopup(provider);
  
  export default firebase;