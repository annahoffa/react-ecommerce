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

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user: ', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
