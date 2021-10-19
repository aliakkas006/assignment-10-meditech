import React from 'react';
import { useLocation } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const SignIn = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    return (
        <div className="text-center my-60">
            <h2 className="text-3xl mb-12 text-primary font-medium">Please sign in</h2>

            {/* Google sign in btn */}
            <button onClick={signInUsingGoogle}
                className="inline-flex items-center bg-yellow-200 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-400 rounded text-base mt-4 md:mt-0">Google sign in
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button>

        </div>
    );
};

export default SignIn;


/* 
<form>
                <label htmlFor="email">
                    <input type="text" placeholder="Enter your email" />
                </label>
                <label htmlFor="">
                    <input type="password" name="password" id="" placeholder="Password" />
                </label>
                <input type="submit" value="Submit" />
            </form>
*/