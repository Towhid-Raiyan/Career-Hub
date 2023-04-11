import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'appliedJobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      }
      ,
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
