import { types } from '@babel/core';
import React, {useState,useEffect} from 'react'

import PokemonCard from './PokemonCard';

function PokemonCards ({pokemons,openModal,setSelectedPokemon})
{

    return (<div>
        <div className="row">
        {
            pokemons.map((pokemon)=>(
                <div className="col-md-4" key={pokemon.id}>  
                    <PokemonCard
                        pokemon={pokemon}
                        openModal={openModal}
                        setSelectedPokemon={setSelectedPokemon}
                    />
                    </div>
                
            ))
        }
        </div>
    </div>)
}

export default PokemonCards;