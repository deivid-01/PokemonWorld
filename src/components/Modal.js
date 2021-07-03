import React from 'react'
import './Modal.css'
import PokemonInfo from './Pokedex/PokemonInfo'


function Modal ({isOpen, closeModal,pokemon}){
  
    const preventClose= (e) =>{
        e.stopPropagation();
    }

    return (
        <div className={`modal-bg ${isOpen && 'modal-open'}`}
            onClick={closeModal}>
            <div onClick={preventClose}>
                <PokemonInfo
                    pokemon={pokemon}
                    />
            </div>
        
        </div>
        )
}

export default Modal