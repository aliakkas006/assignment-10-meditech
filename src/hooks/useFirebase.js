import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged , signOut  } from "firebase/auth";
import initializeAuthentication from "../pages/Shared/Register/Firebase/firebase.init";
const { useState, useEffect } = require("react")

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);

        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then(result => setUser(result.user))
            .finally(() => setIsLoading(false));
    }

    // Observe the user auth state changed:
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
        return () => unsubscribed;
    }, []);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(result => setUser({}))
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;