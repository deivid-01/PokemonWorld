import React from 'react'
import {splitAndUpper} from '../../utils/stringtools'
import './ScrollableList.css'
import {List,ListItem,ListItemText } from '@material-ui/core';


function ScrollableList({data,listName})
{
  
    return (  <div className="list-body">
        {
          (data.length>0)?
            <List  subheader={<li />}>
                  {data.map((item, idx) => (
                    <ListItem key={idx}>
                      <ListItemText style={{textAlign:'center'}} primary={splitAndUpper(item.name,'-')} />
                    </ListItem>
                  ))}
            </List>
              :
              <p>No {listName}</p>
        }
        </div>)
}

export default ScrollableList