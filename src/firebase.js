import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBwQHo0uMDp_rZacfKWD0RaWJzd3Tbv-r8",
  //apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "sol-admin-dashboard.firebaseapp.com",
  projectId: "sol-admin-dashboard",
  storageBucket: "sol-admin-dashboard.appspot.com",
  messagingSenderId: "594136418926",
  appId: "1:594136418926:web:e28bd76fceb73edc8ef47f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);