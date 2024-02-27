// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBumgn-AT7ge1-8jt44rQnPXCuReFke-pk",
  authDomain: "myfirstapp-f125e.firebaseapp.com",
  projectId: "myfirstapp-f125e",
  storageBucket: "myfirstapp-f125e.appspot.com",
  messagingSenderId: "421688173046",
  appId: "1:421688173046:web:037616c1a06f896d70a7d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;