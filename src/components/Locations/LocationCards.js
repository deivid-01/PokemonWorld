import { types } from '@babel/core';
import React from 'react'

import LocationCard from './LocationCard';
import {Grid} from '@material-ui/core'
function LocationCards ({locations,openModal,setSelectedLocation})
{

    return (<div className="container">
        <Grid container  alignItems="stretch">
        {
            locations.map((location)=>(
                <Grid  item style={{display: 'flex',width:600}}>
                    <LocationCard
                        location={location}
                        openModal={openModal}
                        setSelectedLocation={setSelectedLocation}
                    />
                    
                    </Grid>
                
            ))
        }
        </Grid>
    </div>)
}

export default LocationCards;