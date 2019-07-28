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
      const collectionRef = firestore.collection('users');

      const snapShot = await userRef.get();
      const collectionSnapShot = await collectionRef.get();
      console.log({collection: collectionSnapShot.docs.map(doc=> doc.data)});
      
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
  };

  export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) =>{
      const collectionRef = firestore.collection(collectionKey);
      
      const batch = firestore.batch();
      objectsToAdd.forEach(obj => {
          const newDocRef = collectionRef.doc();
          batch.set(newDocRef,obj);
          
      });
      return await batch.commit();
    }

  export const convertCollectionsSnapShotToMap = collections =>{
      const transformedCollection = collections.docs.map(doc =>{
          const {title,items} = doc.data();

          return {
              routeName: encodeURI(title.toLowerCase()),
              id: doc.id,
              title,
              items,

          };
      });

      return transformedCollection.reduce((accumulator, collection)=> {
          accumulator[collection.title.toLowerCase()] = collection;
          return accumulator;
      },{});
  }

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({prompt: 'select_account'});

  export const SigninWithGoogle = ()=> auth.signInWithPopup(googleProvider);
  
  export default firebase;