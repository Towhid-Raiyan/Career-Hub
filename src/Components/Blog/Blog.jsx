import React from 'react';

const Blog = () => {
    const myStyle = {
        backgroundImage: "url('https://i.ibb.co/s2pL0hW/Vector.png')",
        backgroundRepeat: "no-repeat",
    };
    return (
        <div>
            <div className='h-48 bg-indigo-50  text-center bg-no-repeat'>
                <div style={myStyle} className="h-full w-full flex items-center justify-center">
                    <h1 className="text-2xl font-extrabold bg-indigo-50 text-center pb-9">Blogs</h1>
                </div>
            </div>
            {/* <h2 className='text-2xl font-extrabold bg-indigo-50 text-center pb-9'>Blogs</h2> */}
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
                    A custom hook is a JavaScript function that uses the built-in hooks provided by React to create reusable logic that can be shared across multiple components. Custom hooks are a way to abstract away complex logic from components and create reusable logic that can be shared across different components. By creating custom hooks, we can avoid writing repetitive code in multiple components and centralize the logic in one place.
                </p>
            </div>
            <div className='bg-cyan-50 my-3 px-12'>
                <h2 className='font-bold py-2'>
                    What is useRef? Why it is used?
                </h2>
                <p className='py-2'>
                    useRef is mainly used for creating a reference of the DOM element or directly accessing it inside a functional component. useRef is a hook that provides a way to create a mutable reference to a DOM element or a value that persists between renders. It is commonly used to access the DOM element directly or to store a mutable value that persists between renders without triggering a re-render.
                </p>
            </div>
            <div className='bg-cyan-50 my-3 px-12'>
                <h2 className='font-bold py-2'>
                    What is useMemo? Why it is used?
                </h2>
                <p className='py-2'>
                    useMemo is a hook that allows us to memoize the result of a function call so that it is only re-computed when its dependencies change. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.
                </p>
            </div>
        </div>
    );
};

export default Blog;