import React from 'react'

function Title({img}){
    return(
        <div className="text-center  text-light animate__animated animate__fadeInDown" >
        <img src={img} className="title-flex" alt=""/>
        </div>
    )
}

export default Title;
