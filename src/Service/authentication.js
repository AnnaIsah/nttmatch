/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
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
  doc,
  updateDoc,
  setDoc,
} from "firebase/firestore";

const db = getFirestore();
const provider = new GoogleAuthProvider();
export const authentication = getAuth();

export async function signInGoogle() {
  const result = await signInWithPopup(authentication, provider);
  const credential = GoogleAuthProvider.credentialFromResult(result);
  return credential;
}

export async function addUsers(user) {
  const userObject = addDoc(collection(db, 'user'), user);
  return userObject;
}



