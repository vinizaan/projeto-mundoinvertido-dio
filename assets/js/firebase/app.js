// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjZ2vse3UUICliJkVauMd8yAG8IHIsyP0",
    authDomain: "projeto-mundoinvertido-dio.firebaseapp.com",
    projectId: "projeto-mundoinvertido-dio",
    storageBucket: "projeto-mundoinvertido-dio.appspot.com",
    messagingSenderId: "579334775925",
    appId: "1:579334775925:web:1455bcbb05ec370aa4843c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;