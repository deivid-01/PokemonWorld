import React, {useState, useEffect} from 'react'
import {TextField} from '@material-ui/core'
import Modal from '../Modal'
import PokemonCards from './PokemonCards'
import Pagination from '../Pagination'
import {getPokemonData,getPokemons,searchPokemon } from '../../services/api'
import Title from '../Title'
import SearchBar from '../SearchBar'
import img_title from '../../assets/pokedex.png'

function Pokedex(){

    const NUM_ITEMS=10
    const [show, setShow] = useState(false);
    
    const [pokemons,setPokemons] = useState([])
    const [selected_pokemon,setSelectedPokemon]= useState(null)
    const [found_pokemon,setFoundPokemon]= useState(null)
    const [actualPage,setActualPage]= useState(0)
    const [totalPages,setTotalPages]= useState()
    
    const [notFound,setNotFound] = useState(false);

    const onSearch = async(pokemon_name)=>{

        if(!pokemon_name)
            return fetchPokemon();

        const res = await searchPokemon(pokemon_name)
        if(res)
        {
            setPokemons([res])
            setNotFound(false)
        }
            

        else
            setNotFound(true)
       
    }

    const onNextPage = ()=>{
        setActualPage(actualPage+1)
    } 
    
    const onPreviousPage = ()=>{
        if (actualPage > 0)
            setActualPage(actualPage-1)
    } 
    const onSelectPokemonHandler = (pokemon)=> {
        setSelectedPokemon(pokemon)     
    }

    const fetchPokemon = async() => {
        try
        {
            //Get pokemons data
            const data = await getPokemons(NUM_ITEMS, NUM_ITEMS*actualPage);
            
            //Get specific data of each pokemon
            const promises = data.results.map( async (pok)=>{
                    return await getPokemonData(pok.url)
                })
        //Await until get all promises
            const results = await Promise.all(promises)
            //Set Data

            setTotalPages( Math.ceil(data.count/NUM_ITEMS))
            setPokemons(results)
            setNotFound(false);
        }
        catch(err)
        {

        }
    }
    
    const handleCloseModal = () => setShow(false);
    const handleShowModal = () => setShow(true);

    useEffect(()=>{
        fetchPokemon()
    },[actualPage])

    return (
        <div>     
            <br></br>
            <Title img={img_title}/>
             <br></br>
            <SearchBar
                onSearch={onSearch}
            />
            <br></br>
            <Pagination
                page ={actualPage}
                totalPages={totalPages}
                onLeftClick={onPreviousPage}
                onRightClick={onNextPage}
            />
            <br></br>
            {(!notFound)?<PokemonCards
                pokemons={pokemons}
                openModal={handleShowModal}
                setSelectedPokemon={onSelectPokemonHandler}
                />
                :
                <p>Pokemon Not Found</p>
            
        }
            

            {/*Modal with pokemon info*/ }
            {
                show && selected_pokemon &&  
                <Modal isOpen={show}
                        closeModal ={handleCloseModal}
                        pokemon={selected_pokemon}
                />
            }  
        
      
        </div>
    )
}

export default Pokedex;