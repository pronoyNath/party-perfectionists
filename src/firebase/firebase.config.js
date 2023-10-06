// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa7A35qZ-Ite2jmCr0Tw4xABH96NPdLnA",
  authDomain: "weddingperfectionists.firebaseapp.com",
  projectId: "weddingperfectionists",
  storageBucket: "weddingperfectionists.appspot.com",
  messagingSenderId: "428741373091",
  appId: "1:428741373091:web:fe5893a944c7e0fb386316"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;