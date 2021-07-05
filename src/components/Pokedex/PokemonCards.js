import { types } from '@babel/core';
import React from 'react'

import PokemonCard from './PokemonCard';
import {Grid} from '@material-ui/core'

function PokemonCards ({pokemons,openModal,setSelectedPokemon})
{

    return (
                <div className="container pokedex-grid"  >

        {
            pokemons.map((pokemon)=>(
               
                    <PokemonCard
                        key={pokemon.id}
                        pokemon={pokemon}
                        openModal={openModal}
                        setSelectedPokemon={setSelectedPokemon}
                    />
                    
                   
                
            ))
        }
        </div>
   )
}

export default PokemonCards;