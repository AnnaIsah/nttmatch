/* eslint-disable no-unused-vars */
import * as firebase from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseSettings from "./firebaseSettings.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  deleteDoc,
  doc,
  updateDoc,
  arrayUnion,
} from "./firestore.js";

const provider = new GoogleAuthProvider();
export const authentication = getAuth();

export async function signInGoogle() {
  const result = await signInWithPopup(authentication, provider);
  const credential = GoogleAuthProvider.credentialFromResult(result);
  return credential;
}

export const db = getFirestore();

export async function addUsers(name, userEmail, phone, age, gender, CEP) {
  console.log(addUsers)
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name,
      userEmail,
      phone,
      age,
      gender,
      CEP,
      interests: [],
    });
    return docRef.id;
  } catch (e) {
    return null;
  }
}
