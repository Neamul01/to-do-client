// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFk3W02dQGrVFC6l1xUko97vNuEXSVnX8",
    authDomain: "to-do-app-cf5d7.firebaseapp.com",
    projectId: "to-do-app-cf5d7",
    storageBucket: "to-do-app-cf5d7.appspot.com",
    messagingSenderId: "159255681555",
    appId: "1:159255681555:web:5bc40682febe4a21f0bde6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;