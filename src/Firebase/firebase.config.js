
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAjbhteHvqLNpFVsV8ObMFZfP-yK105s4g",
  authDomain: "lenesqueen-a0269.firebaseapp.com",
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;