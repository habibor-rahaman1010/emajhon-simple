//this is my firebase funtionality here...
import { useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, GithubAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect } from 'react';


const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');


    initializeAuthentication();

    // google sign in funtionality
    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();
        return signInWithPopup(auth, googleProvider);
    }

    // google sign in funtionality
    const githubSignIn = () => {
        const githubProvider = new GithubAuthProvider();
        const auth = getAuth();
        return signInWithPopup(auth, githubProvider);
    }


    //coustom crete authrntication user
    // name, email, password, repassword
    const createCoustomUser = (email, password) => {
        const auth = getAuth();
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //coustom sign in authentication....
    const createCoustomSignIn = (email, password) => {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password)
    }

    // set display name and profile
    // const updateUserInformation = (name) => {
    //     const auth = getAuth();
    //     return updateProfile(auth.currentUser, {
    //         displayName: name,
    //     })
    // }


    //login user state persistance , observe whether user auth state changed or not....
    useEffect(() => {
        const auth = getAuth();
        const unsubscriber = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                return () => setUser({});
            }
        });
        return () => unsubscriber()
    }, [user]);


    // sign out funtionality here
    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error.message)
        });
    };

    console.log(user)

    return {
        user,
        setUser,
        error,
        setError,
        logout,
        googleSignIn,
        githubSignIn,
        createCoustomUser,
        createCoustomSignIn
    }
}

export default UseFirebase;