import React, { createContext, useEffect, useState } from 'react';
// import auth from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword,  GoogleAuthProvider,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';
export const AuthContext = createContext(null)
import { toast, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AuthProvider = ({ children }) => {
    const Porvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loading, setLoding] = useState(true)

    const crateNewUser = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Logout = () => {
        setLoding(true);
        // alert('logout successfully')
        toast.info("Successfully Logout!", {
            position: "top-center",
            autoClose: 3000,
        });
        return signOut(auth)
    }
    const continueToGoogle = () => {
        setLoding(true);
        signInWithPopup(auth, Porvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success("Successfully logged in with Google!", {
                    position: "top-center",
                    autoClose: 3000,
                });
            })
    };

    const Login = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
        const UpdateUserProfile = (update) => {
            return updateProfile(auth.currentUser, update)
        }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoding(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const AutInfo = {
        user,
        setUser,
        crateNewUser,
        Logout,
        Login,
        continueToGoogle,
        loading,
        UpdateUserProfile, 
        // ForgotPassword
    }
    return (
        <AuthContext.Provider value={AutInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;