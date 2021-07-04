import React from 'react'
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
function  Pagination({onRightClick,onLeftClick,page,totalPages})
{
    return (<div className="container ">
        <div className="c-pagination">
          <IconButton onClick={onLeftClick}>
          <ArrowBackIcon fontSize="large"/>
          </IconButton>
          <p>{page+1} de {totalPages}</p> 
          <IconButton onClick={onRightClick}>
          <ArrowForwardIcon fontSize="large"/>
          </IconButton>
        </div>
    </div>)
}

export default Pagination;