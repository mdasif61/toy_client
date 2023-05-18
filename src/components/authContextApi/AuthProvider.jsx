import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

const auth=getAuth(app);
export const UserOther=createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updateData=(user,name,photo)=>{
      return updateProfile(user,{
            displayName:name,
            photoURL:photo
        })
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unSubscribe()
        }
    },[updateData])

    const info={
        user,
        createUser,
        signIn,
        logOut,
        updateData,
        loading
    }

    return (
        <UserOther.Provider value={info}>
            {children}
        </UserOther.Provider>
    );
};

export default AuthProvider;