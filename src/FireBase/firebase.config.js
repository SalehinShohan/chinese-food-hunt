// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4h2AZ4eig_41NkuPmtHng06Lw2i-YZXs",
  authDomain: "chinese-food-hunt.firebaseapp.com",
  projectId: "chinese-food-hunt",
  storageBucket: "chinese-food-hunt.appspot.com",
  messagingSenderId: "1015890963836",
  appId: "1:1015890963836:web:4a10ce1b1d34f21ec348f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;