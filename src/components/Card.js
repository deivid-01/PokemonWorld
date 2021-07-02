import React from 'react'

import './cards.css'

function Card ({title,description,image})
{
    console.log(title)
    console.log(description)
    return (
        <div className='card text-center bg-red animate__animated animate__fadeInUp '>
            
            <div className="overflow">
            <img src={image} alt="" className="card-img-top"/>
            </div>

            <div className='card-body'>

            <a href="#!" className="btn">
                <h4 className='card-title'>{title}</h4>
                </a>
                <p className='card-text text-secondary'>{description}</p>
                
            </div>

        </div>
    )
}

export default  Card;