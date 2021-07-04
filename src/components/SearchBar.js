import React, {useState} from 'react'
import {TextField,IconButton} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
function SearchBar({module,onSearch}){
    const [search,setSearch] = useState('');

    const onChangeInput = (e) =>{
        e.preventDefault();
        setSearch(e.target.value);
    }

    const onClickSearch = ()=> {
      
        onSearch(search.toLowerCase())
    }

    const onPressEnter = (e) =>{

        var keyCode = e.code || e.key;
        if (keyCode == 'Enter')
        {
          // Enter pressed
          e.preventDefault();
          onSearch(search.toLowerCase())
        }
    }

    return(
        <div className="text-center  container c-searchbar ">
            <div className="col-10 ">
                <form noValidate autoComplete="off">
                    <TextField id="filled-basic" fullWidth={true} label={`Search ${module} by name`} variant="filled" 
                       onKeyPress={onPressEnter} onChange={onChangeInput}/>
                </form>
            </div>
            <div className="col-2">
            <IconButton color="primary" aria-label="Search Pokemon" onKeyPress={onPressEnter} onClick={onClickSearch}>
          <SearchIcon fontSize="large" />
        </IconButton>
            </div>

    </div>
    )
}

export default SearchBar;
