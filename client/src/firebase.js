// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRTpgRRVTkbMnZR6Z6e-0JzRg8bliYiqY",
    authDomain: "real-estate-9c71d.firebaseapp.com",
    projectId: "real-estate-9c71d",
    storageBucket: "real-estate-9c71d.appspot.com",
    messagingSenderId: "595176820583",
    appId: "1:595176820583:web:a65e496c1d9a597761a9c2",
    measurementId: "G-N0YH0FKHD1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);