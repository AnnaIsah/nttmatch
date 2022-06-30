/* eslint-disable no-unused-vars */
import * as firebase from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
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
} from "firebase/firestore";

const provider = new GoogleAuthProvider();
export const authentication = getAuth();

export async function signInGoogle() {
  const result = await signInWithPopup(authentication, provider);
  const credential = GoogleAuthProvider.credentialFromResult(result);
  return credential;
}

export const db = getFirestore();


export async function addUsers(user) {
  const userObject = addDoc(collection(db, 'user'), user);
  return userObject;
}

const GetUsers = async () => {
  // const [allUser, setAllUser] = useState([]);
  const allUsers = await getDocs(collection(db, 'user'));
  allUsers.forEach((doc)=>{
    console.log(doc.id,"=>",doc.data())
  });
}
export default GetUsers