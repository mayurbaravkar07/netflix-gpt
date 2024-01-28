// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbCfoe41V5K9O1NkKX0NWSaluUDIXCRGU",
  authDomain: "netflix-gpt-3a7e5.firebaseapp.com",
  projectId: "netflix-gpt-3a7e5",
  storageBucket: "netflix-gpt-3a7e5.appspot.com",
  messagingSenderId: "215427104683",
  appId: "1:215427104683:web:d0173af138fe0ea2701cee",
  measurementId: "G-VGQ5807MGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();
