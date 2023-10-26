import React from 'react';
import PetDetails from './PetDetails';
import PetPhotos from './PetPhotos';
import PetAdoption from './PetAdoption';
import PetRescueCamp from './PetRescueCamp';

function PetProfile() {
    
    return (
        <div className="container mt-5">
            <div className="row justify-content-between mb-8">
                <div className="col-md-8">
                    <PetDetails 
                        name="Harper"
                        breed="Golden Doodle"
                        location="Somerset, KY"
                        age="Adult"
                        gender="Male"
                        size="Large"
                        color="Brown"
                        characteristics={['Friendly', 'Affectionate', 'Curious', 'Gay']}
                        coatLength="Long"
                        houseTrained="Yes"
                        health="Vaccinations up to date, spayed / neutered"
                        goodInHome="Other Male Dogs."
                        description="Lorem ipsum dolor sit amet, nam id mundi persecuti neglegentur. Lucilius euripidis efficiantur et vim, eu sit tollit salutatus definiebas. Cu mel brute cetero, choro iriure scaevola vim in, pro ad modus justo rationibus. Modus assentior pri in. Id quo nibh adolescens, in postea quaestio per, aliquip tincidunt sea cu. Cu wisi volumus partiendo sed, nam et movet definitionem, eu solum omittantur his.

                        Mea assum ludus eu. No quo harum putent nominavi, iusto everti principes at sed. In sed dolor perpetua, oratio aliquip nam at, at per docendi principes. Cum case vocent no. Ut vim accumsan persequeris, duis tritani salutatus id vix. Nam utinam delenit deterruisset te."
                    />
                </div>
                
                <div className="col-md-4">
                    <PetPhotos photos={['...']} />
                    <PetAdoption petName="Harper" />
                    <PetRescueCamp location="Somerset, KY" email="rescuecamp@example.com" />
                </div>
            </div>
        </div>
    );
}

export default PetProfile;
