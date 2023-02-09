// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPzUTjVGACFFXYExEvaNyGbXT7nzUGqtM",
  authDomain: "login-angga-470be.firebaseapp.com",
  projectId: "login-angga-470be",
  storageBucket: "login-angga-470be.appspot.com",
  messagingSenderId: "436335948322",
  appId: "1:436335948322:web:2e536fa9f9d3c7b496d07b",
  measurementId: "G-EBTERFLHCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;