import { types } from '@babel/core';
import React from 'react'

import LocationCard from './LocationCard';
import {Grid} from '@material-ui/core'
function LocationCards ({locations,openModal,setSelectedLocation})
{

    return (
        <div className="container pokedex-grid"  >
            {
            locations.map((location)=>(
                
                    <LocationCard
                        location={location}
                        openModal={openModal}
                        setSelectedLocation={setSelectedLocation}
                    />
                    
                
                
            ))
        }
       
    </div>)
}

export default LocationCards;