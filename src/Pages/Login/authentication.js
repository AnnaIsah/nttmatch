import { getAuth, GoogleAuthProvider, signInWithPopup, setPersistence, browserSessionPersistence} from  "../../Service/firebaseAuth";

const auth = getAuth();

export function logarGmail() {
  return setPersistence(auth, browserSessionPersistence)
    .then(() => {
      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth, provider);
    });
}