import React, { useEffect, useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
// import FeaturedJob from './FeaturedJobs';

const FeaturedJobSection = () => {
    
    const [jobs, setJobs] = useState([]);
    const [showless, setShowless] = useState([]);

    useEffect(()=>{
        fetch('Jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    useEffect(()=>{
        setShowless(jobs.slice(0,4));
    },[jobs])

    const [status, setStatus] = useState(false);
    const toggleStatus = () => {
        setStatus(!status);
    }
    
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className="mt-28 text-center">
                <h1 className="font-semibold text-3xl">Featured Jobs</h1>
                <p className="text-gray-500 mt-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='mt-28 grid grid-cols-2 container mx-auto gap-6'>
                { 
                   status? jobs.map(job => <FeaturedJob key={job.job_id} job={job}></FeaturedJob>) : showless.map(sl => <FeaturedJob key={sl.job_id} job={sl}></FeaturedJob>)
                }
            </div>
            <button onClick={toggleStatus} className='btn items-center mt-10 bg-indigo-400 px-4 py-2 rounded-lg text-white text-l font-bold mb-5'>
                See All jobs
            </button>
        </div>
    );
};

export default FeaturedJobSection;
