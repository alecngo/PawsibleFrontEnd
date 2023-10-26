import React from 'react';

function PetRescueCamp(props) {
    const { location, email } = props;

    return (
        <div className="card shadow-lg mb-4">
            <div className="card-body">
                <h3>Rescue Camp</h3>
                <p>{location}</p>
                <button className="btn btn-light mb-2"><i className="bi bi-heart"></i> Quality Active</button>
                <p>{email}</p>
                <button className="btn btn-primary">More about us</button>
            </div>
        </div>
    );
}

export default PetRescueCamp;
