// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRhbLFvFRxwbaF7wRoVZuLbKBAeJfjiWU",
  authDomain: "vue-elective-2022-worppress-ic.firebaseapp.com",
  projectId: "vue-elective-2022-worppress-ic",
  storageBucket: "vue-elective-2022-worppress-ic.appspot.com",
  messagingSenderId: "722582458242",
  appId: "1:722582458242:web:dae0647af74bdbbf88899b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);