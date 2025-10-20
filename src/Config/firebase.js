// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyCobrne6qNOjtxTnmu84F39AvcZoNnQhNo",
  authDomain: "equilearn-4d604.firebaseapp.com",
  projectId: "equilearn-4d604",
  storageBucket: "equilearn-4d604.firebasestorage.app",
  messagingSenderId: "311656465683",
  appId: "1:311656465683:web:4a63ec24f65a734e3206e6",
  measurementId: "G-BY962YJQJM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { app, auth };
