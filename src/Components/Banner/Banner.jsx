import React from 'react';

const Banner = () => {
    return (
        <div className='px-12 flex justify-between bg-indigo-50'>
            <div className='mr-32 w-5/12'>
                <h3 className='text-4xl font-extrabold'>Very Close To Your <br /><span className='text-indigo-500'>Dream Career</span></h3>
                <p className='text-gray-500 mt-6 mb-7'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn-primary px-4 py-2 text-white'>Apply Now</button>
            </div>
            <img className='w-96' src="/src/assets/All_Images/P3OLGJ1copy1.png" alt="" />
        </div>
    );
};

export default Banner;