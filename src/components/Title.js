import React from 'react'

function Title({img}){
    return(
        <div className="text-center  title-flex animate__animated animate__fadeInDown" >
        <img src={img} className="title-flex" alt=""/>
        </div>
    )
}

export default Title;
