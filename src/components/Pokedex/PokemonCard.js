import React ,{useEffect,useState} from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import GradeIcon from '@material-ui/icons/Grade';
import Chip from '@material-ui/core/Chip';
import './PokemonCard.css'

const useStyles = makeStyles((theme)=>({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  media: {
    width: 151,
  },
}));
  

function PokemonCard({pokemon,openModal,setSelectedPokemon}) {
 
  
 
    const classes = useStyles();

    const setTypeMessage = ()=>{
      
      var typesNames=pokemon.types.map((item)=>{
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
      setSelectedPokemon(pokemon);
    }

    const handleOnMouseOver =(e)=>{
      console.log("onMouseOver");

    }
   
    return ( 
      
      <div  style={{cursor: 'pointer'}} onMouseEnter={handleOnMouseOver} className={`pokemon-card animate__animated animate__fadeInUp `} onClick={onClickHandler}>
      
        <div className="pokemon-img-container">
          <img src ={pokemon.sprites.front_default}
              alt = {pokemon.name}
              className="pokemon-img"/>


        </div>

        <div className="card-body">
          <div className="card-top">
            <h3>{pokemon.name}</h3>
            <div>
              # {pokemon.id}
            </div>
          </div>
          <div className="pokemon-type">
            {
              pokemon.types.map((item,idx)=>{

                return         <Chip key={idx}
                label={item.type.name[0].toUpperCase()+item.type.name.substring(1,item.type.name.length)}
                color={"secondary"}
                icon = {<GradeIcon/>}
            />
                })
            }
          </div>
        </div>


      </div>
 
)
}

export default PokemonCard;