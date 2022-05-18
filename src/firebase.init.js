// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDHObzdvOdftq7dvergmSomX74mosROJ8",
    authDomain: "todo-app-c9de7.firebaseapp.com",
    projectId: "todo-app-c9de7",
    storageBucket: "todo-app-c9de7.appspot.com",
    messagingSenderId: "965159501294",
    appId: "1:965159501294:web:e88b1979f792292fc722ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth