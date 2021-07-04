import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    position:'absolute',
    left:'50%',
    top:'50%',
    WebkitTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)'
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
      <CardHeader
        title={location.names[1].name}
        subheader={"#"+location.id}
      />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Region:
        </Typography>
        <Typography variant="h5" component="h2">
          {location.region.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Areas:
        </Typography>
          {
            location.areas.map((area)=>{
              return (
              <Typography variant="body2" component="p">
              {area.name}
            </Typography>
              )
            })
          }
          <Typography className={classes.pos} color="textSecondary">
          Generation:
        </Typography>
        <Typography variant="body2" component="p">
             {settleGeneration(location.game_indices[0].generation.name)}
            </Typography>

        
      </CardContent>

    </Card>
  );
}

export default LocationInfo