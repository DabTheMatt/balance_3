import logo from './logo.svg';
import './style.css';
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

import OnePage from './OnePage/OnePage';

function App() {
  return (
    <div className="App">
     <OnePage />
    </div>
  );
}

export default App;
