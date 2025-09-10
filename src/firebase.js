import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-firebase-test-df882.firebaseapp.com",
  projectId: "react-firebase-test-df882",
  appId: "1:122834453628:web:d797ef160e5124593bb5f9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);