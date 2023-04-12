import React from 'react';

const AppliedJobHeader = () => {
    const myStyle = {
        backgroundImage: "url('https://i.ibb.co/s2pL0hW/Vector.png')",
        backgroundRepeat: "no-repeat",
    };
    return (
        <div className="h-48 bg-indigo-50  text-center bg-no-repeat">
            <div style={myStyle} className="h-full w-full flex items-center justify-center">
                <h1 className="text-2xl font-extrabold bg-indigo-50 text-center pb-9">Applied Jobs</h1>
            </div>
        </div>
    );
};

export default AppliedJobHeader;