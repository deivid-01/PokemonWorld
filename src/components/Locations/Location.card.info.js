import React from 'react';
import {Card, CardContent,CardHeader, Chip,Typography } from '@material-ui/core';
import {Map,ZoomOutMap,Timeline} from '@material-ui/icons'
import {removeAndUpper,firstToUpper,splitAndUpper} from '../../utils/stringtools'

function LocationInfo({location}) {

  const {id,name,region,areas,game_indices} = location
  //English name
  
  //Generation
  const {generation} = (game_indices.length>0)?game_indices[0]:{name:"No generation"}

  

  return (
   
    <Card className="card-info-noimage" variant="outlined">

      <CardHeader className="card-info-header"
        title={splitAndUpper(name,'-')} //Get location name in english
        subheader={"#"+id}
      />
      <CardContent>

      <Typography className="card-info-subtitles" color="textSecondary" gutterBottom>
        Region:
      </Typography>

      <Chip icon={<Map/>}
        label = {firstToUpper(region.name)} //Region name
        color={"primary"} 
        />
  { areas.length>0 && (
    <div>
      <Typography className="card-info-subtitles"color="textSecondary">
        Areas:
      </Typography>
      {
        areas.map((area)=>{
          return (
            <Chip icon={<ZoomOutMap/>}
            label = {firstToUpper(area.name)} //Areas
            color={"secondary"} />
          )
        })
      }
      </div>)
      }
    {   game_indices.length>0 && (
      <div>
        <Typography className="card-info-subtitles" color="textSecondary">
        Generation:
      </Typography>
      
          <Chip icon={<Timeline/>}
          label = {removeAndUpper('generation-',game_indices[0].generation.name)} //Generation
          color={"default"} />
        </div>)
      }
    
       

        
      </CardContent>

    </Card>
    
  );
}

export default LocationInfo