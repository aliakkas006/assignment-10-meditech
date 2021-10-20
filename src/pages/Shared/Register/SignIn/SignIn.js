import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const SignIn = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_ui = location?.state?.from || '/';

    // Redirect user to the actual destination after sign ih
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => history.push(redirect_ui));
    }

    return (
        <div className="text-center my-60">
            <h2 className="text-3xl mb-12 text-primary font-medium">Please sign in</h2>

            {/* Google sign in btn */}
            <button onClick={handleGoogleSignIn}
                className="inline-flex items-center bg-yellow-200 border-0 py-2 px-3 focus:outline-none hover:bg-yellow-400 rounded text-base mt-4 md:mt-0"><i className="fab fa-google"></i>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button>

        </div>
    );
};

export default SignIn;

