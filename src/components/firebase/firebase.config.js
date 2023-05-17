import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAmeAKuk-M14bVdMlBF-v3zHApm0RS_lMI",
  authDomain: "sports-special-ca4dd.firebaseapp.com",
  projectId: "sports-special-ca4dd",
  storageBucket: "sports-special-ca4dd.appspot.com",
  messagingSenderId: "276960266444",
  appId: "1:276960266444:web:cb26609f14ce1721a21a69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;