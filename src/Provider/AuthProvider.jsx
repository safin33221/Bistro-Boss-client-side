import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

export const authContex = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()


    // create user with email pass
    const createUserWithEamil = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    //signUp user with email
    const signUpUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //signUp with google
    const signUpGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    //sing out user
    const singoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    //update user profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    //manage user
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser);
        })
        return () => {
            unsubcribe()
        }
    }, [])


    const authValue = {
        user,
        loading,
        createUserWithEamil,
        updateUserProfile,
        signUpUser,
        signUpGoogle,
        singoutUser
    }


    return (
        <authContex.Provider value={authValue}>
            {children}
        </authContex.Provider>
    );
};

export default AuthProvider;