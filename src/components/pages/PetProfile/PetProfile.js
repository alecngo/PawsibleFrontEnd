import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PetDetails from './PetDetails';
import PetPhotos from './PetPhotos';
import PetAdoption from './PetAdoption';
import PetRescueCamp from './PetRescueCamp';
import aboutImage from '../../../assets/img/about.png';

function PetProfile() {
    const { id } = useParams(); // This gets the ID from the URL
    const [animal, setAnimal] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Replace with your actual API endpoint
        fetch(`http://localhost:8081/findpet/${id}`) 
            .then(response => response.json())
            .then(data => {
                setAnimal(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching animal:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!animal) {
        return <div>No animal found</div>;
    }

    // Now using the fetched animal data to display in the components
    return (
        <div className="container mt-5">
            <div className="row justify-content-between mb-8">
                <div className="col-md-8">
                    <PetDetails 
                        name={animal.Name}
                        breed={animal.Breed}
                        location={`${animal.Contact.Address.City}, ${animal.Contact.Address.State}`}
                        age={animal.Age}
                        gender={animal.Gender}
                        size={animal.Size}
                        color={animal.Color}
                        characteristics={animal.Tags}
                        // coatLength={animal.coatLength}
                        houseTrained={animal.Attributes.HouseTrained}
                        // health={animal.health}
                        // goodInHome={animal.goodInHome}
                        description={animal.Description}
                    />
                </div>
                
                <div className="col-md-4">
                    <PetPhotos photos={animal.photos || [aboutImage]} />
                    <PetAdoption petName={animal.Name} />
                    <PetRescueCamp location={`${animal.Contact.Address.City}, ${animal.Contact.Address.State}`} email={animal.email} />
                </div>
            </div>
        </div>
    );
}

export default PetProfile;
