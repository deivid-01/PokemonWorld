import React from 'react'

function  Pagination({onRightClick,onLeftClick,page,totalPages})
{
    return (<div className="container ">
        <div className="c-pagination">
        <button onClick={onLeftClick}>previous</button>
          <p>{page+1} de {totalPages}</p>  
        <button onClick={onRightClick}>next</button>
        </div>
    </div>)
}

export default Pagination;