import React from 'react';
import {Card, CardContent,CardHeader, Chip,Typography } from '@material-ui/core';
import {ZoomOutMap} from '@material-ui/icons'
import {removeAndUpper,firstToUpper,splitAndUpper} from '../../utils/stringtools'

function GenerationInfo({generation}) {

  const {id,abilities,name,main_region,moves,pokemon_species,types,version_groups} = generation

  return (
   
    <Card className="card-info-noimage" variant="outlined">

      <CardHeader className="card-info-header"
        title={splitAndUpper(name,'-')} //Get generation name in english
        subheader={"#"+id}
      />
      <CardContent>


      <Typography className="card-info-subtitles"color="textSecondary">
        Moves:
      </Typography>
      {
        moves.map((move)=>{
          return (
            <Chip icon={<ZoomOutMap/>}
            label = {firstToUpper(move.name)} //Areas
            color={"secondary"} />
          )
        })
      }

      </CardContent>

    </Card>
    
  );
}

export default GenerationInfo