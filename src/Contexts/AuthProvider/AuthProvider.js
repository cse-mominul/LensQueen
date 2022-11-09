import React, { createContext, useContext, useEffect, useState} from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth);
    }

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentuser =>{
            console.log(currentuser);
            setUser(currentuser);
        })
        return ()=>{
            return unsubscribe();
        }
    })

    const authInfo ={
        user,
        loading,
        createUser,
        login,
        providerLogin,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;