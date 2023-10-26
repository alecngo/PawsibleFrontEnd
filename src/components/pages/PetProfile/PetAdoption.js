import React from 'react';

function PetAdoption(props) {
    const { petName } = props;

    return (
        <div className="card shadow-lg mb-4 bg-primary text-white">
            <div className="card-body">
                <h2 className="text-center mb-3">Considering {petName} for adoption?</h2>
                <div className="button-container">
                    <button className="btn btn-light btn-block custom-btn">START YOUR INQUIRY</button>
                    <button className="btn btn-outline-light btn-block custom-btn">READ FAQs</button>
                    <button className="btn btn-light btn-block custom-btn">FAVORITE</button>
                </div>
            </div>
        </div>
    );
}

export default PetAdoption;
