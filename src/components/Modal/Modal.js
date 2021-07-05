import React from 'react'
import './Modal.css'
import PokemonInfo from '../Pokedex/PokemonInfo'
import LocationInfo from '../Locations/Location.card.info'
import GenerationInfo from '../Generations/Generation.card.info'

function Modal ({module,data,closeModal}){
  
    const preventClose= (e) => e.stopPropagation();
       
    return (
        <div className='modal-bg modal-open'  onClick={closeModal}>
            <div onClick={preventClose}>
            {(!module.localeCompare('pokemon')) ? <PokemonInfo pokemon={data}/>
            :(!module.localeCompare('location')) ?<LocationInfo location={data}/>
            :<GenerationInfo generation={data}/>
            } 
            </div>
        </div>
        )
}

export default Modal