import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAz-uudmGx9Aud2kkM_0EHbifE-IPmxjZo",
    authDomain: "ecommerce-react-3785b.firebaseapp.com",
    projectId: "ecommerce-react-3785b",
    storageBucket: "ecommerce-react-3785b.appspot.com",
    messagingSenderId: "198025722049",
    appId: "1:198025722049:web:469b9392f40cd0ac58bc40"
};


initializeApp(firebaseConfig);

const db = getFirestore()

export default db;