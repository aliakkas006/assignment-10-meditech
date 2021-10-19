import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <header className=" bg-indigo-50 px-28 py-5">
                <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">

                    <img  src={logo} alt="" />
                        <span className="ml-3 text-4xl text-danger font-bold">Health Care Technology</span>
                    
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <NavLink
                            className="text-2xl"
                            to="/home"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            className="mx-3 text-2xl"
                            to="/serviceInfo"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Service Info
                        </NavLink>

                        <NavLink
                            className="mr-3 text-2xl"
                            to="/timetable"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Timetable
                        </NavLink>

                        <NavLink
                            className="text-2xl"
                            to="/about"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            About us
                        </NavLink>
                        
                    </nav>

                    {/* conditional rendering */}
                    {
                        user?.email ? (
                            <button onClick={logOut}
                                className="inline-flex items-center bg-yellow-200 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-400 rounded text-base mt-4 md:mt-0">Sign out
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        ) : (
                                <Link to="/signin">
                                    <button className="inline-flex items-center bg-yellow-200 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-400 rounded text-base mt-4 md:mt-0">Sign in
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </Link>
                        )
                    }

                    <p className="ml-5">
                        Signed in as: <span className="text-primary">{user?.displayName}</span>
                    </p>
                </div>
            </header>
        </div>
    );
};

export default Header;

/* 
<button className="inline-flex items-center bg-yellow-200 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-400 rounded text-base mt-4 md:mt-0">Sign out
                                        <svg fill="none" stroke="currentColor" strokeLinecap=="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
*/