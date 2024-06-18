import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatterbox-31301.firebaseapp.com",
  projectId: "chatterbox-31301",
  storageBucket: "chatterbox-31301.appspot.com",
  messagingSenderId: "849587450975",
  appId: "1:849587450975:web:4164611c704f5e381d57ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
