import React  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import PlaceIcon from '@material-ui/icons/Place';


const useStyles = makeStyles(()=>({
  title:{
    textAlign:'center',
    padding: '1px 0'
  }
}));


function LocationCard({location,openModal,setSelectedLocation}) {
 
    const classes = useStyles();

    const setTypeMessage = ()=>{
      
      var typesNames=location.types.map((item)=>{
        return item.type.name
      })
 
      if (typesNames.length>0 )
      {
        if (typesNames.length==1)
          return typesNames[0]
        return typesNames[0]+" | "+typesNames[1]
      }
      return "No Type"
    }

    const onClickHandler = ()=>{
      openModal();
      setSelectedLocation(location);
    }

    return ( 
      <div  style={{cursor: 'pointer'}} className="pokemon-card " onClick={onClickHandler}>

      <div className="card-body">
        <div className="card-top">
          <h3>{location.name}</h3>
          <div>
            #{location.id}
          </div>
        </div>
        <div className="pokemon-type">
              <Chip
                label={location.region.name[0].toUpperCase()+location.region.name.substring(1,location.region.name.length)}
                color={"secondary"}
                icon = {<PlaceIcon/>}
            />
         
        </div>
      </div>


    </div>


 
)
}

export default LocationCard;