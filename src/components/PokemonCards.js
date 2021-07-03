import { types } from '@babel/core';
import React, {useState,useEffect} from 'react'

import PokemonCard from './PokemonCard';

function PokemonCards ({openModal,closeModal})
{
    const [data,setData] = useState([
        {
            id:23,
            name:'Pikachu',
            types:['Fire','Ground'],
            height:'1.5',
            weight:'20'
        },
        {
            id:20,
            name:'Bulbasaur',
            types:['Fire','Ground'],
            height:'1.5',
            weight:'20'
        }
    ])

    return (<div>
        <div className="row">
        {
            data.map((item)=>(
                <div className="col-md-4" key={item.id}>  
                    <PokemonCard
                        id = {item.id}
                        name = {item.name}
                        types = {item.types}
                        height = {item.height}
                        weight = {item.weight}
                        openModal={openModal}
                        closeModal={closeModal}
                    />
                    </div>
                
            ))
        }
        </div>
    </div>)
}

export default PokemonCards;