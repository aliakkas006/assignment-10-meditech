import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <div>
            <header class=" bg-indigo-50 px-32 py-5">
                <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">

                    <img  src={logo} alt="" />
                        <span class="ml-3 text-4xl text-danger font-bold">Health Care Technology</span>
                    
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
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
                            className="mx-5 text-2xl"
                            to="/services"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Services
                        </NavLink>

                        <NavLink
                            className="mx-5 text-2xl"
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

                    <button class="inline-flex items-center bg-yellow-200 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-400 rounded text-base mt-4 md:mt-0">Sign in
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;