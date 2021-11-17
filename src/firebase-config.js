import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAygpgQbX39nqwBe9iQXSgKkQpfqF5C874",
  authDomain: "personal-portfolio-4ad6d.firebaseapp.com",
  projectId: "personal-portfolio-4ad6d",
  storageBucket: "personal-portfolio-4ad6d.appspot.com",
  messagingSenderId: "985435259084",
  appId: "1:985435259084:web:8c91861841a1c34538c269",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
