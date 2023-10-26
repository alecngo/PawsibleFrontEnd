import React from 'react';
import { Navbar, Footer, About } from './components';
import PetFinder from './components/pages/PetFinder-Service/PetFinder';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import PetProfile from './components/pages/PetProfile/PetProfile';
import { Login, Signup } from './components/pages/Customer-Service/registration';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/home' element={<PetFinder />} />
                <Route path='/portal' element={<PetProfile />} />
                <Route path='/login' element={<Login />} />
v                <Route path='/signup' element={<Signup />} />

                <Route path="*" element={<div>Not Found</div>} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
