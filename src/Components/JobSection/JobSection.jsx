import React, { useEffect, useState } from "react";
import JobCategories from "../JobCategories/JobCategories";
// import JobCategory from "./JobCategory";

const JobSection = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <div className="mt-28 text-center">
                <h1 className="font-bold text-3xl">Job Category List</h1>
                <p className="text-gray-500 mt-2">Explore thousands of job opportunities with all the information you need. Its your future.</p>
            </div>
            <div className="flex justify-around mt-10"> 
                {
                    categories.map(category => <JobCategories category={category} key={category.id}></JobCategories>)
                }
            </div>
        </div>
    );
};

export default JobSection;
