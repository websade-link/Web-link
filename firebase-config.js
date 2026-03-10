// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Configuration-kaaga gaarka ah
const firebaseConfig = {
  apiKey: "AIzaSyA3juGdrfoI1OvB_CK-EEECamnKAN1LDeQ",
  authDomain: "kalkaal-11d93.firebaseapp.com",
  projectId: "kalkaal-11d93",
  storageBucket: "kalkaal-11d93.firebasestorage.app",
  messagingSenderId: "183774037686",
  appId: "1:183774037686:web:da4e2a841a94063ee68817",
  measurementId: "G-6ZEEWKBH1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Waxaan u "export" gareynaynaa si looga isticmaalo bogagga kale
export const auth = getAuth(app);
export const db = getFirestore(app);

