import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCAZi3yBhkjvKXdF98-Rf2pjj4-zB2PIi8",
    authDomain: "data-coder-react.firebaseapp.com",
    projectId: "data-coder-react",
    storageBucket: "data-coder-react.appspot.com",
    messagingSenderId: "1098900848392",
    appId: "1:1098900848392:web:6bc26783e0a275183036bd"
};


initializeApp(firebaseConfig);

const db = getFirestore()

export default db;