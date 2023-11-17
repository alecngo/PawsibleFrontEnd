import React, { useState } from 'react';
import Description from '../About/Description';
import PetList from './PetList';
import { BrowserRouter as Route, Routes } from 'react-router-dom';

function PetFinder() {
    const [animals, setAnimals] = useState([]);
    const [zipCode, setZipCode] = useState('');
    const [distance, setDistance] = useState('');
    const DISTANCE = 50; // Default distance

    function fetchAnimalsNearMe() {
        const actualDistance = distance ? distance : DISTANCE;
        fetch(`http://localhost:8081/nearby?zip=${zipCode}&distance=${actualDistance}`)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setAnimals(data);
                } else {
                    console.error('Unexpected API response:', data);
                }
            })
            .catch(err => {
                console.error('Error fetching animals:', err);
            });
    }

    return (
        <>
            <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h1 className="display-1 text-uppercase text-dark mb-lg-4">Pet Finder</h1>
                            <h1 className="text-uppercase text-white mb-lg-4">Find Your Perfect Match</h1>
                            <p className="fs-4 text-white mb-lg-4">Enter your location and we'll show you rescues nearby.</p>
                            
                            <div className="mb-lg-4 d-flex justify-content-center">
                                <input 
                                    type="text" 
                                    placeholder="Enter Zip Code" 
                                    value={zipCode}
                                    onChange={e => setZipCode(e.target.value)}
                                    className="form-control me-3"
                                    style={{ width: '240px' }}
                                />
                                <input 
                                    type="text" 
                                    placeholder="Preferred Distance (miles)" 
                                    value={distance}
                                    onChange={e => setDistance(e.target.value)}
                                    className="form-control"
                                    style={{ width: '240px' }}
                                />
                            </div>

                            <div className="d-flex justify-content-center">
                                <button 
                                    onClick={fetchAnimalsNearMe} 
                                    className="btn btn-outline-light border-2 py-md-3 px-md-5"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <Routes>
                    <Route path="/" element={<PetList animals={animals} />} />
                </Routes>
            </div>
            <Description />
        </>
    );
}

export default PetFinder;
