import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import First from './components/First/First';
import Friends from './components/Friends/Friends';
import Friend from './components/Friend/Friend';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>
//   },
//   {
//     path:"/about",
//     element: <About></About>
//   },
//   {
//     path:"/contact",
//     element: <Contact></Contact>
//   },
  
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    children: [
      {
        path:"/",
        element:<First></First>

      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "friends",
        element: <Friends></Friends>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:"friend/:friendId",
        element:<FriendDetail></FriendDetail>,
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)

      },
      {
        path:"posts",
        element:<Posts></Posts>,
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/posts')

      },
      {
        path:"posts/:postId",
        element:<PostDetails></PostDetails>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      }
    ],

  }

  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      
    <RouterProvider router={router}>
    </RouterProvider>

  </React.StrictMode>,
)
