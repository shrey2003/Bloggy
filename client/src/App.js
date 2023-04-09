import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Register from "./pages/Register"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Write from "./pages/Write"
import Single from "./pages/Single"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path:"/register",
    element:<Register/>,
  },
  {
    path:"/login",
    element:<Login/>,
  },
  {
    path:"/single",
    element:<Single/>,
  },
  {
    path:"/write",
    element:<Write/>,
  },
]);


function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
