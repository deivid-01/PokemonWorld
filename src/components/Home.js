import React, {useState,useEffect} from 'react';
import Cards from './Cards'
import img_title from '../assets/pokemonworld.png'
import bg_generations from '../assets/bg_generations.jpg'
import bg_pokemon from '../assets/bg_pokemons2.jpg'
import bg_locations from '../assets/bg_locations.png'
function Home ()
{
    const [cardsData,setCardsData] = useState([
        {
            id:1,
            title:'Generations',
            image:bg_generations,
            description:'Watch and search Pokemon Generations .In each generation, a new set of Pokémon, Moves, Abilities and Types.'
        },
        {
            id:2,
            title:'Pokemon',
            image:bg_pokemon,
            description:'Watch and search detailed information about the creatures that inhabit the world of the Pokémon games.'
        },
        {
            id:3,
            title:'Locations',
            image:bg_locations,
            description:'Check out the Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.'
        },
    ]) 
    return (<div>
        <br></br>
        <div className="text-center text-light" >
        <img src={img_title} alt=""/>
        </div>
        <br></br>
        
        <div >
        <Cards data={cardsData}></Cards>
        </div>
    </div>
        
    )
}
export default Home;