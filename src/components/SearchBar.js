import React from 'react'
import {TextField} from '@material-ui/core'
function SearchBar({img}){
    return(
        <div className="text-center  container">
        <form noValidate autoComplete="off">

            <TextField id="filled-basic" fullWidth={true} label="Search Pokemon by name" variant="filled" />
      
        </form>
    </div>
    )
}

export default SearchBar;
