// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

import 'firebase/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVTOJHZRuC8fJodRutTd2crHLKogr8XvM",
  authDomain: "ezeats-bd114.firebaseapp.com",
  projectId: "ezeats-bd114",
  storageBucket: "ezeats-bd114.appspot.com",
  messagingSenderId: "489402822639",
  appId: "1:489402822639:web:dc986b129b7d7e3672101a",
  measurementId: "G-4D17M4F057"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);