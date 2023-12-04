// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXyJAggdftc1y1gcUu-SWlgwe-TaThP_A",
    authDomain: "instagram-clone-6fa4d.firebaseapp.com",
    projectId: "instagram-clone-6fa4d",
    storageBucket: "instagram-clone-6fa4d.appspot.com",
    messagingSenderId: "717508443850",
    appId: "1:532785893748:web:602c5950a997695f965c21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
