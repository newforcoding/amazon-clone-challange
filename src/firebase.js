import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDsV70WaFn7OobVEB8s4bVvkjeBRSvymh8",
  authDomain: "clone-80753.firebaseapp.com",
  projectId: "clone-80753",
  storageBucket: "clone-80753.appspot.com",
  messagingSenderId: "151433191492",
  appId: "1:151433191492:web:4c75d5ca32b183f9681c11"
});

const db = firebase.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export {db,auth,provider} 
