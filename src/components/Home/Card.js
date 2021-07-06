import React from 'react'
import {useHistory} from 'react-router-dom'

import './cards.css'

function Card ({title,description,image,url})
{
    const history   = useHistory();
    
    const onClickHandler = ()=>{
        history.push(url);
    }

    return (
        <div 
        style={{backgroundColor:'rgba(0,0,0,0.3)'}}
        className='card text-center bg-red card-bg-color animate__animated animate__fadeInUp c-card '>
            
            <div className="overflow">
            <img src={image} alt="" className="card-img-top"/>
            </div>
            <div className='card-body'>

            
                <a onClick={onClickHandler} className="btn" >
                <h4 className='card-title text-light'>{title}</h4>
                
                <p 
               
                className='card-text text-light'>{description}</p>
                </a>
            </div>

        </div>
    )
}

export default  Card;