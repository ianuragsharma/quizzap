import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA8lkScEAUnQXuyAm4o-_1wNF6jRDmrh90",
  authDomain: "quizzaap.firebaseapp.com",
  projectId: "quizzaap",
  storageBucket: "quizzaap.appspot.com",
  messagingSenderId: "285020405393",
  appId: "1:285020405393:web:2fc6455796b981daa48930",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, app };
