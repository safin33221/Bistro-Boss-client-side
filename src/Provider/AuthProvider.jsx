import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import useAxiosOpen from "../Hooks/useAxiosOpen";

export const authContex = createContext()

const AuthProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(null)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosOpen = useAxiosOpen()
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
        setLoading(true)
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {

            if (currentUser) {
                setUser(currentUser)
                const userInfo = { email: currentUser.email }
                axiosOpen.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('Token', res.data.token)
                            setLoading(false)
                        }
                    })
            } else {
                // localStorage.removeItem('Token')
                setLoading(false)
            }

        })
        return () => {
            unsubcribe()
        }
    }, [user])


    const authValue = {
        user,
        loading,
        setIsAdmin,
        isAdmin,
        createUserWithEamil,
        updateUserProfile,
        signUpUser,
        signUpGoogle,
        singoutUser,
        name:'safin'
    }


    return (
        <authContex.Provider value={authValue}>
            {children}
        </authContex.Provider>
    );
};

export default AuthProvider;