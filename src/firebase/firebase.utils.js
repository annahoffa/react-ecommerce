import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
  apiKey: 'AIzaSyCa9ORVvg9srdQO61K_YNKoHB9lr36kzKU',
  authDomain: 'react-ecommerce-db-6f6f4.firebaseapp.com',
  projectId: 'react-ecommerce-db-6f6f4',
  storageBucket: 'react-ecommerce-db-6f6f4.appspot.com',
  messagingSenderId: '961823924516',
  appId: '1:961823924516:web:11fa26877e204e07a013b1',
  measurementId: 'G-SHR7S9NVYH',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
