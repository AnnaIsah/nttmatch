import * as firebase from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import firebaseConfig from "../../Service/firebaseSettings.js";

const provider = new GoogleAuthProvider();
export const authentication = getAuth();

export async function signInGoogle() {
  const result = await signInWithPopup(authentication, provider);
  const credential = GoogleAuthProvider.credentialFromResult(result);
  return credential;
}
