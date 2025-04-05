

import {BrowserRouter, Routes, Route, useLocation} from 'react-router';

import { AnimatePresence, motion } from "framer-motion";

import Home from './pages/Home';
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';
import Team from './pages/Team';
import Footer from './components/Footer';
import Candidates from './pages/Candidates';
import ProfileForm from './pages/ProfileForm';
import ProfileFormExtended from './pages/ProfileFormExtended';


const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }
};



function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        
        <Route index element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
        <Route path="/candidates" element={<PageWrapper><Candidates /></PageWrapper>} />
        <Route path="/profile-form" element={<PageWrapper><ProfileForm /></PageWrapper>} />
        <Route path="/profile-form-extended" element={<PageWrapper><ProfileFormExtended /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
          
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children } : {children: React.ReactNode}) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
      {children}
    </motion.div>
  );
}


function App() {

  return (
   <div className='app'>
      <NavBar></NavBar>
      <div className="container" style={{paddingTop: 0, width: "100%", margin: 0, maxWidth: "100%"}}>
        <BrowserRouter>
          <AnimatedRoutes></AnimatedRoutes>
          
        </BrowserRouter>
      </div>
      <Footer></Footer>

    </div>
  );
}

export default App;

