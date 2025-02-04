import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Replace these configuration details with your Firebase project's credentials.
const firebaseConfig = {
    apiKey: "AIzaSyAC60YBL4u_vx3gD8brhcojO6kVS4aHamU",
    authDomain: "auth-9f988.firebaseapp.com",
    projectId: "auth-9f988",
    storageBucket: "auth-9f988.firebasestorage.app",
    messagingSenderId: "421671708169",
    appId: "1:421671708169:web:d0206f6090c56dffadbad8",
    measurementId: "G-JMSEFPS1RF"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
