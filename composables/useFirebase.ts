import {
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged,
    signOut
} from "firebase/auth";

export const createUser = async (email, password) => {
    const auth = getAuth();
    const credentials = await createUserWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
    return credentials;    
}

export const signInUser = async (email, password) => {
    const auth = getAuth();
    const credentials = await signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    return credentials;
}

export const initUser = async () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
        } else {
      // User is signed out
      // ...
        }
    });   
}


export const signoutUser = async () => {
  const auth = getAuth();  
  const results = await signOut(auth).catch((error) => {
    console.log("An error happened in signout");
   });
   console.log("No error happened in signout");
  return results;
}

