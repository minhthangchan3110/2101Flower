
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDhrg6QN7xRQjMYMGR7WdrdfkQb96q8mWE",
    authDomain: "nlmart.firebaseapp.com",
    projectId: "nlmart",
    storageBucket: "nlmart.appspot.com",
    messagingSenderId: "938390132777",
    appId: "1:938390132777:web:b471d15e0a77a22537a438"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app