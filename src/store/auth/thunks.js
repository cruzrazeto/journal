import { logoutFirebase, loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from '../../firebase';
import { checkingCredential, logout, login } from './';

export const checkingAuthentication = (email, password)=>{

  return async ( dispatch ) => {
    dispatch( checkingCredential() );
  }
}

export const startGoogleSignIn = ()=>{

  return async ( dispatch ) => {
    dispatch( checkingCredential() );
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch( logout( result.errorMessage));
    console.log({ result });
    return dispatch(login( result ));
  }
}

export const startCreateUserWithEmailPassword = ({ email, password, displayName }) => {
  return async( dispatch ) => {

    dispatch( checkingCredential() );

    const {ok , uid, photoURL , errorMessage } = await registerUserWithEmailPassword({email, password, displayName, });

    if(!ok) return dispatch( logout( {errorMessage} ));

    dispatch(login({uid, displayName, email, photoURL}));

  }
}


export const startLoginWhitEmailPassword = ({ email, password }) => {
  return async( dispatch ) => {

    dispatch( checkingCredential() );

    const {ok , uid, photoURL , errorMessage } = await loginWithEmailPassword({ email, password});
    
    // signInWithEmailAndPassword(FirebaseAuth, email, password);

    if(!ok) return dispatch( logout( {errorMessage} ));

    dispatch(login({uid, displayName, email, photoURL}));

  }
}

export const startLogout = () => {
  return async(dispatch) => {
    await logoutFirebase();
    dispatch(logout());
  }
}
