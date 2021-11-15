import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAHyy-leIzrHsBjxbRb_CaadQVRIhvQy1w",
  authDomain: "portfolio-c1485.firebaseapp.com",
  projectId: "portfolio-c1485",
  storageBucket: "portfolio-c1485.appspot.com",
  messagingSenderId: "433371298565",
  appId: "1:433371298565:web:e2280881e75aecf2e0d56c",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
