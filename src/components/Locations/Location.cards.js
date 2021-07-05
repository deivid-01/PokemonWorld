import React from 'react'
import LocationCard from './Location.card';

function LocationCards ({locations,openModal,setSelectedLocation})

{
    return (
        <div className="container pokedex-grid"  >
            {
            locations.map((location)=>(
                    <LocationCard 
                        key={location.id}
                        location={location}
                        openModal={openModal}
                        setSelectedLocation={setSelectedLocation}
                    />                
            ))
        }
       
    </div>)
}

export default LocationCards;