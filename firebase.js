// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNoZ0doYTsEHS1tr7rXC7Zd_VnAsW_I7U",
  authDomain: "istt-9981d.firebaseapp.com",
  projectId: "istt-9981d",
  storageBucket: "istt-9981d.appspot.com",
  messagingSenderId: "857929721349",
  appId: "1:857929721349:web:8a207a9615319f22561e6c",
  measurementId: "G-P368Z8JQKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
const analytics = getAnalytics(app);