import React  from 'react'
import Chip from '@material-ui/core/Chip';
import PlaceIcon from '@material-ui/icons/Place';
import {firstToUpper, splitAndUpper} from '../../utils/stringtools'

function LocationCard({location,openModal,setSelectedLocation}) {
 
  //Data
  const {id,name,region} = location  
  
  const onClickHandler = ()=>{
      openModal();
      setSelectedLocation(location);
    }

    return ( 
      <div  className="pokemon-card active-pointer" onClick={onClickHandler}>

        <div className="card-body">

          <div className="card-top">

            <h3>{splitAndUpper(name,'-')}</h3>

            <div>
              #{id}
            </div>

          </div>

          <div className="pokemon-type">

                <Chip
                  label={firstToUpper(region.name)}
                  color={"secondary"}
                  icon = {<PlaceIcon/>}
                />
          
          </div>

        </div>


    </div>
    )
    }

export default LocationCard;