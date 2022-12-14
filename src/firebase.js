// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from 'firebase/compat/app'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDGMnwvNPt37si9Jbu2FZMpPPraRmjscRc",
    authDomain: "twitter-clone-bc137.firebaseapp.com",
    projectId: "twitter-clone-bc137",
    storageBucket: "twitter-clone-bc137.appspot.com",
    messagingSenderId: "257360506226",
    appId: "1:257360506226:web:befee1629c5ef3670e01eb",
    measurementId: "G-VQJH5MBSTB"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
  


 
  

  export { db };