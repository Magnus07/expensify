// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {collection, getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBTIeFUceUWLtQp5p1yTsdftQHh4DRIkjY',
  authDomain: 'expensify-7fa23.firebaseapp.com',
  projectId: 'expensify-7fa23',
  storageBucket: 'expensify-7fa23.appspot.com',
  messagingSenderId: '443452730077',
  appId: '1:443452730077:web:0d0682071aad2b97c48934',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const tripsRef = collection(db, 'trips');
export const expensesRef = collection(db, 'expenses');

export default app;
