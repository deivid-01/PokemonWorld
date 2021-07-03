import React from 'react'
import './Modal.css'
import PokemonInfo from './PokemonInfo'
function Modal ({isOpen, closeModal}){
const preventClose= (e) =>{
    e.stopPropagation();
}

    return (
        <div className={`modal-bg ${isOpen && 'modal-open'}`}
            onClick={closeModal}>
                <div onClick={preventClose}>
         <PokemonInfo/>
         </div>
        
        </div>
        )
}

export default Modal