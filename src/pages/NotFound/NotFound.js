import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <div className="flex justify-center">
                <img src="https://image.freepik.com/free-vector/error-404-concept-landing-page_52683-13616.jpg" alt="" />
            </div>

            <NavLink
                className="flex justify-center text-2xl text-danger"
                to="/home"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >
                Go to Home!
            </NavLink>
        </>
        
    );
};

export default NotFound;