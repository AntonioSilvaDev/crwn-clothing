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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get()

  if(!snapshot.exists){

    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(err){
      console.log('there was an error', err)
    }
  }

  return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;