import React, {useState, useEffect} from 'react'
import Modal from '../Modal/Modal'
import LocationCards from './Location.cards'
import Pagination from '../Pagination/Pagination'
import {getItemByURL,getItems,searchItem } from '../../services/api.services'
import Title from '../Title'
import SearchBar from '../SearchBar'
import img_title from '../../assets/title_locations.png'

import Loading from '../Loading/Loading'
import Message from '../Message/Message'


function Locations ()  {
    
    //Config
    const NUM_ITEMS=10
    const MODULE='location'
    //Data
    const [locations,setLocations] = useState([])
    const [selected_location,setSelectedLocation]= useState(null)
    
    //Pages
    const [actualPage,setActualPage]= useState(0)
    const [totalPages,setTotalPages]= useState()
    
    //Hide/Show Components
    const [loadingData,setLoadingData] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [notFound,setNotFound] = useState(false);

    const fetchLocation = async() => {
        try
        {
            setLoadingData(true);
            //Get locations data
            const data = await getItems(MODULE,
                                        NUM_ITEMS, //Limit
                                        NUM_ITEMS*actualPage); //Offset
            setLoadingData(false);
            //Get specific data of each location
            const promises = data.results.map( async (pok)=>{
                    return await getItemByURL(pok.url)
                })
        //Await until get all promises
            const results = await Promise.all(promises)
            //Set Data

            setTotalPages( Math.ceil(data.count/NUM_ITEMS))
            setLocations(results)
            setNotFound(false);
        }
        catch(err)
        {

        }
    }

    const updatePage= (e,page_)=>{
        setActualPage(page_-1)
    }

    const onSearch = async(location_name)=>{

        if(!location_name)
            return fetchLocation();
        setLoadingData(true);
        const res = await searchItem(MODULE,location_name)
        setLoadingData(false);
        if(res)
        {
            setLocations([res])
            setNotFound(false)
        }
        else
            setNotFound(true)
       
    }

    
    const onPreviousPage = ()=>{
        if (actualPage > 0)
            setActualPage(actualPage-1)
    } 
    
    const onNextPage = ()=>  setActualPage(actualPage+1)
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    const onSelectLocationHandler = (location)=>  setSelectedLocation(location)     
       
    
    useEffect(()=>{
        fetchLocation()
    },[actualPage])

    return (
        <div >
           <br></br>
            <Title img={img_title}/>
             <br></br>
             <SearchBar  module={MODULE} onSearch={onSearch} />
              <br></br>

            { (loadingData)?
                <Loading>
                </Loading>
                :(!notFound)?
                <LocationCards
                    locations={locations}
                    openModal={handleShowModal}
                    setSelectedLocation={onSelectLocationHandler}
                    />
                 
                :
                <Message
                    msg='Location Not Found'
                />
            }
            
              <Pagination
                totalPages={totalPages}
                updatePage={updatePage}   
            />
              <br></br>
              <br></br>
            {
                showModal && selected_location &&  
                    <Modal 
                    module={MODULE}
                    data={selected_location}
                    closeModal ={handleCloseModal}
                    />
                }      
        </div>)
}

export default Locations;