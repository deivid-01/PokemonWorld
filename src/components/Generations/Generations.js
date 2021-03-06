import React, {useState, useEffect} from 'react'
import Modal from '../Modal/Modal'
import GenerationCards from './Generation.cards'
import Pagination from '../Pagination/Pagination'
import {getItemByURL,getItems,searchItem } from '../../services/api.services'
import Title from '../Title'
import SearchBar from '../SearchBar'
import img_title from '../../assets/generations.png'

import Loading from '../Loading/Loading'
import Message from '../Message/Message'


function Generations ()  {
    
    //Config
    const NUM_ITEMS=10
    const MODULE='generation'
    //Data
    const [generations,setGenerations] = useState([])
    const [selected_generation,setSelectedGeneration]= useState(null)
    
    //Pages
    const [actualPage,setActualPage]= useState(0)
    const [totalPages,setTotalPages]= useState()
    
    //Hide/Show Components
    const [loadingData,setLoadingData] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [notFound,setNotFound] = useState(false);

    const fetchGeneration = async() => {
        try
        {
            //Get generations data
            setLoadingData(true);
            const data = await getItems(MODULE,
                                        NUM_ITEMS, //Limit
                                        NUM_ITEMS*actualPage); //Offset
            
            //Get specific data of each generation
            const promises = data.results.map( async (pok)=>{
                    return await getItemByURL(pok.url)
                })
        //Await until get all promises
            const results = await Promise.all(promises)
            //Set Data
            setLoadingData(false);
            setTotalPages( Math.ceil(data.count/NUM_ITEMS))
            setGenerations(results)
            setNotFound(false);
        }
        catch(err)
        {

        }
    }


    const onSearch = async(generation_name)=>{

        if(!generation_name)
            return fetchGeneration();
        setLoadingData(true);
        const res = await searchItem(MODULE,generation_name)
        setLoadingData(false);
        if(res)
        {
            setGenerations([res])
            setNotFound(false)
        }
        else
            setNotFound(true)
       
    }

    
    const onPreviousPage = ()=>{
        if (actualPage > 0)
            setActualPage(actualPage-1)
    } 
    
    const onNextPage = ()=> 
    {
        if (actualPage < (totalPages-1))
            setActualPage(actualPage+1)
    }
        
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    const onSelectGenerationHandler = (generation)=>  setSelectedGeneration(generation)     
    const updatePage= (e,page_)=>  setActualPage(page_-1)
       
    
    
    useEffect(()=>{
        fetchGeneration()
    },[actualPage])

    return (
        <div >
           <br></br>
            <Title img={img_title}/>
             <br></br>
             <SearchBar  module={MODULE} onSearch={onSearch} />
              <br></br>

            {(loadingData)?
                <Loading>
                </Loading>
                :(!notFound)?
                <GenerationCards
                    generations={generations}
                    openModal={handleShowModal}
                    setSelectedGeneration={onSelectGenerationHandler}
                    />
                :
                <Message
                    msg='Generation Not Found'
                />
            }
              <br></br>
              <Pagination
                totalPages={totalPages}
                updatePage={updatePage}   
            />
              <br></br>
              <br></br>
            {
                showModal && selected_generation &&  
                    <Modal 
                    module={MODULE}
                    data={selected_generation}
                    closeModal ={handleCloseModal}
                    />
                }      
        </div>)
}

export default Generations;