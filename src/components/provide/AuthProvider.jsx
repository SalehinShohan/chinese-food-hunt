/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../FireBase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const registerUser = (phtot, name, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo ={
        registerUser
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;