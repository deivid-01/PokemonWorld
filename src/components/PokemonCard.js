import React ,{useEffect,useState} from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useHistory} from 'react-router-dom'
import Modal from './Modal'
import PokemonInfo from './PokemonInfo';
import imageTest from '../assets/pikachu.jpg'

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
  

function PokemonCard({id,name,types,height,weight,openModal,closeModal}) {
    
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const history =useHistory();
    const classes = useStyles();

    const setTypeMessage = ()=>{
      
      if (types.length >0 )
      {
        if (types.length==1)
          return types[0]
        return types[0]+" | "+types[1]
      }
      return "No Type"
    }

    const onClickHandler=()=>
    {
      setShow(true)
    }

    return ( 
      <div>
       <Card className={classes.root}>
      <CardActionArea onClick={openModal}>
      <div className={classes.details}>
        <CardHeader
          title={name}
          subheader={"#"+id}
        />
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            {setTypeMessage()}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {"Width:"+weight+" Height:"+height}
          </Typography>
        </CardContent>
      </div>
      </CardActionArea>
      <CardMedia
        className={classes.media}
        image={imageTest}
        title="Live from space album cover"
      />
    </Card>

 
 </div>)
}

export default PokemonCard;