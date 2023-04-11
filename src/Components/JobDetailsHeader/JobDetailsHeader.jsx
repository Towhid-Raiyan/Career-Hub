import React from 'react';
// import background from "/Vector.png";

const JobDetailsHeader = () => {
    const myStyle = {
        backgroundImage: "url('https://i.ibb.co/s2pL0hW/Vector.png')",
        backgroundRepeat: "no-repeat",
    };
    return (
        <div className='className="h-48 bg-indigo-50  text-center bg-no-repeat'>
            <div style={myStyle} className="h-full w-full flex items-center justify-center">
                <h1 className="text-2xl font-extrabold bg-indigo-50 text-center pb-9"> Job Details</h1>
            </div>
        </div>
    );
};

export default JobDetailsHeader;