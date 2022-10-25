import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase';

export const AuthContext = createContext()

const Context = ({ children }) => {
    const [user, setUser] = useState(null)

    const auth = getAuth(app)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateName = (name) => {
        return updateProfile(auth.currentUser, { displayName: name })
    }
    const verifyMail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const userInfo = { user, updateName, verifyMail, createUser }
    return (
        <AuthContext.Provider value={userInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default Context;