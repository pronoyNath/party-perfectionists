import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    // google account 
    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    // Function to update user profile
    const updateUserProfile = (displayName, photoURL) => {
        setLoading(true);

        // Get the current user
        const currentUser = auth.currentUser;

        // Update the profile
        return updateProfile(currentUser, {
            displayName: displayName,
            photoURL: photoURL
        })
            .then(() => {
                // Profile updated!
                setLoading(false);
            })
            .catch((error) => {
                // An error occurred while updating the profile
                console.error("Error updating profile:", error);
                setLoading(false);
            });
    }

    // onAuth state change
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,currentUser =>{
             // console.log('state catch#####: ',currentUser);
             setUser(currentUser);
             setLoading(false);
         });
         return ()=>{
             unsubscribe();
         }
     },[])

  

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        updateUserProfile
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;