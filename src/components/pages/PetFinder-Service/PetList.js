import React from 'react';
import aboutImage from '../../../assets/img/about.png';
import { Link } from 'react-router-dom';

function PetList({ animals }) {
  return (
    <div className="animal-list">
      {animals.map(animal => (
        <div key={animal.ID} className="animal">
            <Link to={`/animal/${animal.ID}`}>
                <img
                    src={(animal.Photos && animal.Photos[0] && animal.Photos[0].Medium) || aboutImage}
                    alt={animal.Name}
                />
            </Link>
          <div className="animal-details">
            <h3>{animal.Name}</h3>
            <p>Type: {animal.Type}</p>
            <p>Location: {animal.Contact.Address.City}, {animal.Contact.Address.State}</p>
            {/* You may want to map OrganizationID to a more readable location name */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PetList;