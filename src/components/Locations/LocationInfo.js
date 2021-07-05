import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import Typography from '@material-ui/core/Typography';
import MapIcon from '@material-ui/icons/Map';
import Chip from '@material-ui/core/Chip';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import TimelineIcon from '@material-ui/icons/Timeline';
const useStyles = makeStyles({
  root: {
    alignContent:'center',
    justifyContent:'center',
    minWidth: 275,
    position:'absolute',
    background:'dark',
    left:'50%',
    top:'50%',
    WebkitTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)'
  },
  header:{
    textAlign:'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 5,
  },
});

function LocationInfo({location}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const settleGeneration = (generation)=>{
    return generation.substring(11).toUpperCase();
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader className={classes.header}
        title={location.names[1].name}
        subheader={"#"+location.id}
      />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Region:
        </Typography>
        <Chip icon={<MapIcon/>}
          label = {location.region.name[0].toUpperCase()+location.region.name.substring(1,location.region.name.length)} 
         color={"primary"} />
        <Typography className={classes.pos} color="textSecondary">
          Areas:
        </Typography>
          {
            location.areas.map((area)=>{
              return (
                <Chip icon={<ZoomOutMapIcon/>}
                label = {area.name[0].toUpperCase()+area.name.substring(1,area.name.length)} 
               color={"secondary"} />
              )
            })
          }
          <Typography className={classes.pos} color="textSecondary">
          Generation:
        </Typography>
        <Chip icon={<TimelineIcon/>}
          label = {settleGeneration(location.game_indices[0].generation.name)} 
         color={"default"} />
       

        
      </CardContent>

    </Card>
  );
}

export default LocationInfo