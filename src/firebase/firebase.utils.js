import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBq0pVY_BWcErt_cuseqDf5PwABcJl1YYY",
    authDomain: "crwn-db-ad461.firebaseapp.com",
    databaseURL: "https://crwn-db-ad461.firebaseio.com",
    projectId: "crwn-db-ad461",
    storageBucket: "crwn-db-ad461.appspot.com",
    messagingSenderId: "635581034173",
    appId: "1:635581034173:web:6d02c208285d7eb281d1d4",
    measurementId: "G-0XMJR35KJW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;