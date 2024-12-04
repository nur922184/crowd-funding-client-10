// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZVYsvE0D3C_-c1XQp5ZV93jLBLZoQgkI",
  authDomain: "my-assignment-ten-57a0d.firebaseapp.com",
  projectId: "my-assignment-ten-57a0d",
  storageBucket: "my-assignment-ten-57a0d.firebasestorage.app",
  messagingSenderId: "161329467207",
  appId: "1:161329467207:web:d7982a2017ed08a2fb0662"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
