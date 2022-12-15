// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIoeH6In2FPqAhVfvev__pTxvCPrreevU",
    authDomain: "marvel-comic-64a66.firebaseapp.com",
    projectId: "marvel-comic-64a66",
    storageBucket: "marvel-comic-64a66.appspot.com",
    messagingSenderId: "83470534460",
    appId: "1:83470534460:web:2251700a3432505eec0039"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;