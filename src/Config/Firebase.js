import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyDf4SeSzZuxHC8n-rO9yI4Fxag9HhrWnDg",
    authDomain: "dtprogram-20404.firebaseapp.com",
    projectId: "dtprogram-20404",
    storageBucket: "dtprogram-20404.appspot.com",
    messagingSenderId: "547164832585",
    appId: "1:547164832585:web:14a679735d3e2c0f089098",
    measurementId: "G-KQ96F3G1GW"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);