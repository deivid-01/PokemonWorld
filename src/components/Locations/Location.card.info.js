import React from 'react';
import {Card, CardContent,CardHeader, Chip,Typography } from '@material-ui/core';
import {Map,ZoomOutMap,Timeline} from '@material-ui/icons'
import {removeAndUpper,firstToUpper,splitAndUpper} from '../../utils/stringtools'

function LocationInfo({location}) {

  const {id,name,region,areas,game_indices} = location
  //English name
  
  //Generation
  const {generation} = game_indices[0]



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

        <Typography className="card-info-subtitles" color="textSecondary">
        Generation:
      </Typography>

      <Chip icon={<Timeline/>}
        label = {removeAndUpper('generation-',generation.name)} //Generation
        color={"default"} />
       

        
      </CardContent>

    </Card>
    
  );
}

export default LocationInfo