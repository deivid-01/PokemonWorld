import React from 'react'
import Pagination_ from '@material-ui/lab/Pagination';
function  Pagination({updatePage,totalPages})
{
    return (<div className="container ">
        <div className="c-pagination">
        <Pagination_  count={totalPages} onChange={updatePage} size="large" />
        </div>
    </div>)
}

export default Pagination;