import React from 'react'


function Card ({title,description,image})
{
    console.log(title)
    console.log(description)
    return (
        <div className='card text-center bg-red'>
            <img src={image} alt=""/>
            <div className='card-body'>
                <h4 className='card-title'>{title}</h4>
                <p className='card-text text-secondary'>{description}</p>
            </div>

        </div>
    )
}

export default  Card;