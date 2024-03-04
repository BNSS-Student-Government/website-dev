import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/navbar/NavBar';
import { RouterProvider } from 'react-router';
import { BrowserRouter, createBrowserRouter, useFetcher } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Candidates from './pages/Candidates';

function App() {
  const [scrollToFeatured, setScrollToFeatured] = React.useState(null);

  const router = createBrowserRouter  ([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/team",
      element: <Team />,
    },
    {
      path: "/candidates",
      element: <Candidates />,
    },
  ])
  return (
   <div className='app'>
      <NavBar></NavBar>
      <div className="container" style={{ padding: 0, width: "100%", margin: 0, maxWidth: "100%"}}>
        <RouterProvider router={router} />
      </div>
    </div>

  );
}

export default App;
