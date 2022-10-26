import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase';

export const AuthContext = createContext()

const Context = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()
    const auth = getAuth(app)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleRegister = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const gitHubRegister = () => {
        return signInWithPopup(auth, gitHubProvider)
    }
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    const updateName = (name, photoUrl) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photoUrl })
    }
    const verifyMail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false)
        })
        return unSubscribe()
    }, [])
    const userInfo = { user, loginUser, loader, forgetPassword, updateName, verifyMail, createUser, googleRegister, gitHubRegister }
    return (
        <AuthContext.Provider value={userInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default Context;