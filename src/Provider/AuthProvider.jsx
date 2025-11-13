 import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../firebase/firebase.config';

 export const AuthContext = createContext()
 const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);


     const createUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    };

    const login = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    };

    const logOut = () =>{
        return signOut(auth);
    };

    const updateUser = (updateData) =>{
        return updateProfile(auth.currentUser,updateData)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    },[])


    const AuthData = {
        login,
        setUser,
        updateUser,
        logOut,
        createUser,
        loading,
        setLoading,
        user

    };

    return <AuthContext value={AuthData}>{children}</AuthContext>;
 };
 
 export default AuthProvider;