import { types } from '@babel/core';
import React from 'react'

import LocationCard from './LocationCard';

function LocationCards ({locations,openModal,setSelectedLocation})
{

    return (<div className="container">
        <div className="row">
        {
            locations.map((location)=>(
                <div className="col-md-4" key={location.id}>  
                    <LocationCard
                        location={location}
                        openModal={openModal}
                        setSelectedLocation={setSelectedLocation}
                    />
                    
                    </div>
                
            ))
        }
        </div>
    </div>)
}

export default LocationCards;