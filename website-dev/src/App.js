import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/navbar/NavBar';
import { RouterProvider } from 'react-router';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  const router = createBrowserRouter  ([
    {
      path: "/",
      element: <Home />,
    },
  ])
  return (
   <div className='app'>
  
        <NavBar></NavBar>

      <div className="container" style={{ position: "relative",top:"-4rem", padding: 0, width: "100%", margin: 0, maxWidth: "100%" }}>
        <RouterProvider router={router} />
      </div>
    </div>

  );
}

export default App;
