import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
  
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
         
    }
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    // Observe whether user autj state changed or not
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state change', user);
                setUser(user);
            }
        })
    }, [])



    return { user, logout, signInUsingGoogle }

}

export default useFirebase;