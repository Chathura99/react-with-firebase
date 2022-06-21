import { initializeApp } from "firebase/app";
//add this
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4uCLMzLIKdcfa7DsLhwVUc_BraK6tbcg",
  authDomain: "myapp1-eda2a.firebaseapp.com",
  projectId: "myapp1-eda2a",
  storageBucket: "myapp1-eda2a.appspot.com",
  messagingSenderId: "143223036860",
  appId: "1:143223036860:web:b8e25f3145fc967243e9b9",
  measurementId: "G-DVTSG3PE76"
};

const app = initializeApp(firebaseConfig);
//add this
export const firestore = getFirestore(app);