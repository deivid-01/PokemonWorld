import React from 'react';
import {Card, CardContent,CardHeader, Chip,Typography , Divider } from '@material-ui/core';
import {splitAndUpper,firstToUpper} from '../../utils/stringtools'
import PlaceIcon from '@material-ui/icons/Place';

import ScrollableList from '../ScrollableList';


function GenerationInfo({generation}) {

 
  const {id,abilities,name,main_region,moves,pokemon_species,types,version_groups} = generation

  return (
   
    <Card className="card-info-noimage" variant="outlined">

      <CardHeader className="card-info-header"
        title={splitAndUpper(name,'-')} //Get generation name in english
        subheader={"#"+id}
      />
      <div className="center-item" >
        <Chip 
                  label={firstToUpper(main_region.name)+" Region"}
                  color={"secondary"}
                  icon = {<PlaceIcon/>}
                />
      </div>
    
      <CardContent>
        
        <div className="fixed-list">
            <div className="col">
              <Typography className="card-info-subtitles"color="textSecondary">
                Moves:
              </Typography>
              <br></br>
              <ScrollableList data={moves} listName="Moves"/>
            </div>
            <Divider orientation="vertical" flexItem />
            
            <div className="col">

            <Typography className="card-info-subtitles"color="textSecondary">
              Abilities:
            </Typography>
            <br></br>
            <ScrollableList data={abilities} listName="Abilities"/>
            </div>
            <Divider orientation="vertical" flexItem />


            <div className="col">

              <Typography className="card-info-subtitles"color="textSecondary">
                Pokemon Species:
              </Typography>

              <br></br>

              <ScrollableList data={pokemon_species} listName="Pokemon Species"/>

            </div>
            <Divider orientation="vertical" flexItem />

            <div className="col">

              <Typography className="card-info-subtitles"color="textSecondary">
                Types:
              </Typography>

              <br></br>

              <ScrollableList data={types} listName="Types"/>

            </div>
            <Divider orientation="vertical" flexItem />
            <div className="col">

              <Typography className="card-info-subtitles"color="textSecondary">
                Version Groups:
              </Typography>

              <br></br>

              <ScrollableList data={version_groups} listName="Version Groups"/>

            </div>

         </div>

      </CardContent>

    </Card>
    
  );
}

export default GenerationInfo