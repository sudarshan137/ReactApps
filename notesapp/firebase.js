// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore, collection} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKGMDWgQkuwAlvmBHKtQ5Rz8EQoSkPRX0",
  authDomain: "reactnotes-233d3.firebaseapp.com",
  projectId: "reactnotes-233d3",
  storageBucket: "reactnotes-233d3.appspot.com",
  messagingSenderId: "286003080531",
  appId: "1:286003080531:web:8dc8b1eb48a1445a8ec5a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app)
export const notesCollection = collection(db,"notes")