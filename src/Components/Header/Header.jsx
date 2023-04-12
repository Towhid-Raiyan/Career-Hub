import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' text-center sm:flex justify-between px-3 sm:px-12 pt-6 pb-10 items-center bg-indigo-50'>
            <h2 className='text-xl sm:text-2xl font-extrabold'>CareerHunter</h2>
            <nav className='flex items-center font-medium text-gray-500'>
                <Link to="/" className='m-3'>Home</Link>
                <Link to="/statistics" className='m-3'>Statistics</Link>
                <Link to="/appliedJobs" className='m-3'>Applied Jobs</Link>
                <Link to="/blog" className='m-3'>Blog</Link>
            </nav>
            <button className='btn-primary  px-4 py-2 text-white'>Start Applying</button>
        </div>
    );
};

export default Header;