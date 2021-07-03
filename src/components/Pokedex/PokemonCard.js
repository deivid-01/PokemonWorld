import React ,{useEffect,useState} from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme)=>({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  media: {
    width: 151,
  },
}));
  

function PokemonCard({pokemon,openModal,setSelectedPokemon}) {
 

 
    const classes = useStyles();

    const setTypeMessage = ()=>{
      
      var typesNames=pokemon.types.map((item)=>{
        return item.type.name
      })
 
      if (typesNames.length>0 )
      {
        if (typesNames.length==1)
          return typesNames[0]
        return typesNames[0]+" | "+typesNames[1]
      }
      return "No Type"
    }

    const onClickHandler = ()=>{
      openModal();
      setSelectedPokemon(pokemon);
    }

    return ( 
      <div>
       <Card className={classes.root}>
      <CardActionArea onClick={onClickHandler}>
      <div className={classes.details}>
        <CardHeader
          title={pokemon.name}
          subheader={"#"+pokemon.id}
        />
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            {setTypeMessage()}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {"Width:"+pokemon.weight+" Height:"+pokemon.height}
          </Typography>
        </CardContent>
      </div>
      </CardActionArea>
      <CardMedia
        className={classes.media}
        image={pokemon.sprites.front_default}
        title="Live from space album cover"
      />
    </Card>

 
 </div>)
}

export default PokemonCard;