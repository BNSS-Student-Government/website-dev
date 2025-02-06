

import {BrowserRouter, Routes, Route} from 'react-router';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';
import Team from './pages/Team';
import Footer from './components/Footer';
import Candidates from './pages/Candidates';
import ProfileForm from './pages/ProfileForm';

function App() {

  return (
   <div className='app'>
      <NavBar></NavBar>
      <div className="container" style={{paddingTop: 0, width: "100%", margin: 0, maxWidth: "100%"}}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/candidates" element={<Candidates/>} />
            <Route path="/profile-form" element={<ProfileForm/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
          
        </BrowserRouter>
      </div>
      <Footer></Footer>

    </div>
  );
}

export default App;

