import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-2xl font-extrabold bg-indigo-50 text-center pb-9'>Blogs</h2>
            <div className='bg-cyan-50 my-3 px-12'>
                <h2 className='font-bold py-2'>
                    When you should use context API?
                </h2>
                <p className='py-2'>
                    The Context API in React is a tool for managing global state in our application. It allows us to pass data down the component tree without the need for props drilling. We consider using the Context API in React when we have data or state that needs to be accessed by multiple components in our application. For example, if we have a user object that needs to be accessed by multiple components, we can use the Context API to make that object available to all components without passing it down through props.
                </p>
            </div>
            <div className='bg-cyan-50 my-3 px-12'>
                <h2 className='font-bold py-2'>
                    What is custom hook?
                </h2>
                <p className='py-2'>

                </p>
            </div>
            <div className='bg-cyan-50 my-3 px-12'>
                <h2 className='font-bold py-2'>
                    What is useRef? Why it is used?
                </h2>
                <p className='py-2'>

                </p>
            </div>
            <div className='bg-cyan-50 my-3 px-12'>
                <h2 className='font-bold py-2'>
                    What is useMemo? Why it is used?
                </h2>
                <p className='py-2'>

                </p>
            </div>
        </div>
    );
};

export default Blog;