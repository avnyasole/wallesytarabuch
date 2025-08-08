  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyBecssz_WTIGut9n8LxygvBwQ2--j8NM1o",
  authDomain: "reglemaso.firebaseapp.com",
  projectId: "reglemaso",
  storageBucket: "reglemaso.firebasestorage.app",
  messagingSenderId: "1020235462725",
  appId: "1:1020235462725:web:8611fd2efd051ccffecb2c",
  measurementId: "G-YKRBLXL7G0"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
export const storage = getStorage(app);
