import React from 'react';
import { Link } from 'react-router-dom';
import error from '../assets/error.gif'
const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="max-w-md w-full p-6 bg-card shadow-lg rounded-lg">
            <img src={error} alt="error" className="mx-auto" />
            <h1 className="text-3xl text-sky-600 text-primary-foreground font-bold mt-4 text-center"> Something went wrong.</h1>
            <p className="text-secondary-foreground text-center mt-2">The page you are looking for might be temporarily unavailable.</p>
            <Link to={'/'}>
            <button className="bg-sky-600 text-white hover:bg-sky-700 mt-4 py-2 px-4 rounded-md">Go back to homepage</button>
            </Link>
          </div>
        </div>
        
        
    )
};

export default ErrorPage;