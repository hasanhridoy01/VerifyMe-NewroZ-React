// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGECXR_VerE1Vu1oFx5wUOnnblUG7FKXk",
  authDomain: "login-pannel-95fa0.firebaseapp.com",
  projectId: "login-pannel-95fa0",
  storageBucket: "login-pannel-95fa0.appspot.com",
  messagingSenderId: "992699536526",
  appId: "1:992699536526:web:5633ec70177455196a65df",
  measurementId: "G-M4VVJH3WNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;