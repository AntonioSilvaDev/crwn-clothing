import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBO51PRkH330u_bTuDYMkVSmCgBH1L56LQ",
    authDomain: "crwn-clothing-db-2e1a7.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-2e1a7.firebaseio.com",
    projectId: "crwn-clothing-db-2e1a7",
    storageBucket: "",
    messagingSenderId: "1027108130799",
    appId: "1:1027108130799:web:4902cb88844c0b88"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;