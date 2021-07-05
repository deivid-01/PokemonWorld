import React from 'react'

function Title({img}){
    return(
        <div className="text-center  text-light" >
        <img src={img} className="title-flex" alt=""/>
        </div>
    )
}

export default Title;
