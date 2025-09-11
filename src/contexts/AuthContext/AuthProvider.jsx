import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [loading, setLoading]=useState(true);
    const [user, setUser]=useState(null);


    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    const signInWithGoogle =()=> {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    }


    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged( auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        return () =>{
            unSubscribe();
        }
    },[])


    const authInfo = {
        createUser,
        loading,
        setLoading,
        signInUser,
        user,
        setUser,
        signOutUser,
        signInWithGoogle,
    }

    return (
        <AuthContext value={authInfo}>
            {
                children
            }
        </AuthContext>
    );
};

export default AuthProvider;