import React from 'react';

function PetDetails(props) {
    // Destructuring the props for cleaner usage below
    const {
        name,
        breed,
        location,
        age,
        gender,
        size,
        color,
        characteristics,
        coatLength,
        houseTrained,
        health,
        goodInHome,
        description
    } = props;

    return (
        <div className="card shadow-lg mb-4">
            <div className="card-body">
                <h1 className="display-4">{name}</h1>
                <p className="lead">{breed} - {location}</p>
                <p>{age} - {gender} - {size} - {color}</p>

                <h3>About</h3>
                <p>Characteristics: {characteristics.join(', ')}</p>
                <p>Coat Length: {coatLength}</p>
                <p>House-Trained: {houseTrained}</p>
                <p>Health: {health}</p>
                <p>Good in a home with: {goodInHome}</p>

                <h3>Meet {name}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default PetDetails;
