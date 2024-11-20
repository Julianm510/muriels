import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCHufJruZ29nYhyi1F6NdsVxsYzz4W_8Us",
    authDomain: "backend-muriels.firebaseapp.com",
    projectId: "backend-muriels",
    storageBucket: "backend-muriels.firebasestorage.app",
    messagingSenderId: "995387220995",
    appId: "1:995387220995:web:e6b1ada41c3d0669279a36"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)