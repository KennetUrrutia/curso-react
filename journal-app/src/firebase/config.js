// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAEGbQk34K-406jC3Z-XyMdThVKXFKWgqg',
  authDomain: 'react-curso-a75f6.firebaseapp.com',
  projectId: 'react-curso-a75f6',
  storageBucket: 'react-curso-a75f6.appspot.com',
  messagingSenderId: '384826880814',
  appId: '1:384826880814:web:e2534100fc485b9d3bc0bf'
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)