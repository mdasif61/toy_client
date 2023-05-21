import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

const auth=getAuth(app);
export const UserOther=createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    //  first time create user
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // user sign in
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // google sign in
    const googleProvider=new GoogleAuthProvider()
    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    // user logout
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    // user profile update
    const updateData=(user,name,photo)=>{
      return updateProfile(user,{
            displayName:name,
            photoURL:photo
        })
    }

    // logged user observer
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unSubscribe()
        }
    },[updateData])

    // all context data pass obj
    const info={
        user,
        createUser,
        signIn,
        logOut,
        updateData,
        googleLogin,
        loading
    }

    return (
        <UserOther.Provider value={info}>
            {children}
        </UserOther.Provider>
    );
};

export default AuthProvider;