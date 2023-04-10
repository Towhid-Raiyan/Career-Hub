import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between px-44 pt-6 pb-24 items-center bg-indigo-50'>
            <h2 className='text-2xl font-extrabold'>CareerHunter</h2>
            <nav className='font-medium text-gray-500'>
                <Link to="/" className='m-3'>Home</Link>
                <Link to="/statistics" className='m-3'>Statistics</Link>
                <Link to="/appliedJobs" className='m-3'>Applied Jobs</Link>
                <Link to="/blog" className='m-3'>Blog</Link>
            </nav>
            <button className='bg-indigo-400 px-4 py-2 rounded-lg text-white text-l font-bold'>Start Applying</button>
        </div>
    );
};

export default Header;