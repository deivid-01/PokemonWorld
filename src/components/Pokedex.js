import React, {useState} from 'react'
import {TextField} from '@material-ui/core'
import Modal from './Modal'
import PokemonCards from './PokemonCards'

import img_title from '../assets/pokedex.png'

function Pokedex(){

    const [show, setShow] = useState(false);

    const handleCloseModal = () => setShow(false);
    const handleShowModal = () => setShow(true);

    return (
        <div>  
          
        <Modal isOpen={show}
               closeModal ={handleCloseModal}
                />
      
              <br></br>
        <div className="text-center text-light" >
        <img src={img_title} alt=""/>
        </div>
        <br></br>

        <div className="text-center  container">
            <form noValidate autoComplete="off">

                <TextField id="filled-basic" fullWidth={true} label="Search Pokemon by name" variant="filled" />
          
            </form>
        </div>
        <br></br>
        <div className="container">
                <PokemonCards
                openModal={handleShowModal}
                closeModal={handleCloseModal}
                />
        </div>
      
        </div>
    )
}

export default Pokedex;