import React from 'react';

const JobCategories = ({category}) => {
    
    return (
        <div className='bg-indigo-50 p-4 py-6 w-80 rounded-lg mb-10 mx-6'>
            <img className='bg-indigo-200 p-2 rounded-lg w-16' src={category.category_image} alt="" />
            <h1 className='font-semibold text-2xl mt-6'>{category.category_name}</h1>
            <p className='text-gray-500 mt-2 mb-2'>{category.jobs_available}</p>
        </div>
    );
};

export default JobCategories;