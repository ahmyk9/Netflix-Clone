// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfrdb4YWS8cFoKiAYwl_mKiO8XVPd575Y",
    authDomain: "netflix-clone-8ed2d.firebaseapp.com",
    projectId: "netflix-clone-8ed2d",
    storageBucket: "netflix-clone-8ed2d.appspot.com",
    messagingSenderId: "952439247213",
    appId: "1:952439247213:web:22f85158a9b421e5dbca64"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }