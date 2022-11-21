import React from 'react'
import { createUserWithEmailAndPassword ,GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult( result );
    const { displayName, email, photoURL, uid, } = result.user;
    // console.log({credentials});
    console.log({ displayName, email, photoURL, uid, });
    return {
      ok: true,
      displayName, email, photoURL, uid,
    }
 } catch (err) {
   console.log(err);
   const errorCode = err.code;
   const errorMessage = err.message;
   // const email = error.customData.email;
   // const credential = GoogleAuthProvider.credentialFromError(err);

   return {
    ok: false,
    // errorCode, errorMessage,
   }
 }
}


export const registerUserWithEmailPassword = async({ email, password, displayName }) => {
  try {
    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, photoURL } = resp.user;

    await updateProfile( FirebaseAuth.currentUser, {displayName});

    return {
      ok: true,
      uid, photoURL, email, displayName
    }

  } catch (error) {
    console.error(error.message);
    return { ok:false, errorMessage: error.message }
  }
}

export const loginWithEmailPassword = async({ email, password }) => {
  try {
    const result = await signInWithEmailAndPassword(FirebaseAuth, email, password );
    const {displayName, photoURL, uid } = result.user;
    return {
      ok: true,
      uid, photoURL, email, displayName
    }

  } catch (err) {
    console.error(err.message);
    return { ok:false, errorMessage: err.message };
  }
}

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
}