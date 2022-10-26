import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase';

export const AuthContext = createContext()

const Context = ({ children }) => {
    const [user, setUser] = useState(null)
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
    const updateName = (name) => {
        return updateProfile(auth.currentUser, { displayName: name })
    }
    const verifyMail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const userInfo = { user, loginUser, updateName, verifyMail, createUser, googleRegister, gitHubRegister }
    return (
        <AuthContext.Provider value={userInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default Context;