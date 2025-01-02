import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

export const authContex = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


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
    //sing out user
    const singoutUser = () => {
        setLoading(true)
        return signOut(auth)
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
        signUpUser,
        singoutUser
    }


    return (
        <authContex.Provider value={authValue}>
            {children}
        </authContex.Provider>
    );
};

export default AuthProvider;