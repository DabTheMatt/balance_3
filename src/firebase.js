import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCx6tbLLjh-9cbzxCvqs-3QoPKY9PHNI24",
  authDomain: "balance-3.firebaseapp.com",
  projectId: "balance-3",
  storageBucket: "balance-3.appspot.com",
  messagingSenderId: "825471328842",
  appId: "1:825471328842:web:05549a2149e203ee557cb3",
  measurementId: "G-YTJ1GZ255G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
