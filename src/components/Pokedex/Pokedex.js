import React, {useState, useEffect} from 'react'
import {TextField} from '@material-ui/core'
import Modal from '../Modal'
import PokemonCards from './PokemonCards'
import { getPokemonData, getPokemons,searchPokemon } from '../../services/api'

import img_title from '../../assets/pokedex.png'

function Pokedex(){

    const [show, setShow] = useState(false);
    
    const [pokemons,setPokemons] = useState([])
    const [selected_pokemon,setSelectedPokemon]= useState(null)
    

    const onSelectPokemonHandler = (pokemon)=> {
        setSelectedPokemon(pokemon)
      
    }

    const fetchPokemon = async() => {
        try
        {
            //Get pokemons data
            const data = await getPokemons();
            setPokemons(data)
        }
        catch(err)
        {

        }
    }
    
    const handleCloseModal = () => setShow(false);
    const handleShowModal = () => setShow(true);

    useEffect(()=>{
        fetchPokemon()
    },[])

    return (
        <div>  
          {
              show && selected_pokemon &&  
              <Modal isOpen={show}
              closeModal ={handleCloseModal}
              pokemon={selected_pokemon}
               />
          }
       
      
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
                pokemons={pokemons}
                openModal={handleShowModal}
                setSelectedPokemon={onSelectPokemonHandler}
                />
        </div>
      
        </div>
    )
}

export default Pokedex;