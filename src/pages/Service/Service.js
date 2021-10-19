import React from 'react';
import { Link } from 'react-router-dom';
const Service = ({ service }) => {
    const { id, name, img, description, price, speciality } = service;
    return (
        <>
            <div className="items-center text-center h-full hover:bg-gray-50 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 p-5">
                <img alt="team" className=" rounded-lg w-full object-cover object-center mb-4" src={img} />
                <div class ="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900 text-primary">{name}</h2>
                <h3 class ="text-gray-500 mb-3 text-danger"> {speciality} </h3>
                    <p className="mb-4"> {description} </p>
                    <p className="text-2xl text-custom mb-3 font-medium">Visit fee: ${price} </p>
                    <span className="inline-flex">
                        {/* Icon */}
                        <span className="text-grey-500">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </span>
                        <span className="ml-2 text-gray-500">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.6411.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </span>
                        <span className="ml-2 text-gray-500">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                        </span>
                    </span>
                </div>

                {/* Details btn */}
                <Link to={`/servicing/${id}`}>
                    <button className="inline-flex items-center bg-blue-200 border-0 py-1 px-3 focus:outline-none hover:bg-blue-400 rounded text-base my-5 md:mt-0">Details here!
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </Link>
                
            </div>
        </>
    );
};

export default Service;

// <Link to={`/servicing/${id}`}>