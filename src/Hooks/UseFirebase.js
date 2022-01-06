//this is my firebase funtionality here...
import { useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, GithubAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from 'react';


const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    // coustom login sate....
    const [email, setEmail] = useState('')
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');


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
    const createCoustomUser = () => {
        const auth = getAuth();
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //coustom sign in authentication....
    const createCoustomSignIn = () => {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password)
    }

    //login user state persistance , observe whether user auth state changed or not....
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                return;
            }
        })
    }, [user]);

    // sign out funtionality here
    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        });
    };



    return {
        user,
        setUser,
        error,
        setError,
        logout,
        googleSignIn,
        githubSignIn,
        createCoustomUser,
        createCoustomSignIn,
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        repassword,
        setRepassword
    }
}

export default UseFirebase;