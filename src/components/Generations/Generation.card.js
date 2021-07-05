import React  from 'react'
import Chip from '@material-ui/core/Chip';
import PlaceIcon from '@material-ui/icons/Place';
import {firstToUpper, splitAndUpper} from '../../utils/stringtools'

function GenerationCard({generation,openModal,setSelectedGeneration}) {
 
  //Data
  const {id,name,main_region} = generation  
  
  const onClickHandler = ()=>{
      openModal();
      setSelectedGeneration(generation);
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
                  label={firstToUpper(main_region.name)}
                  color={"secondary"}
                  icon = {<PlaceIcon/>}
                />
          
          </div>

        </div>


    </div>
    )
    }

export default GenerationCard;