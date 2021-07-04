import React  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(()=>({
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
  

function LocationCard({location,openModal,setSelectedLocation}) {
 

 
    const classes = useStyles();

    const setTypeMessage = ()=>{
      
      var typesNames=location.types.map((item)=>{
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
      setSelectedLocation(location);
    }

    return ( 
      <div>
       <Card className={classes.root}>
      <CardActionArea onClick={onClickHandler}>
      <div className={classes.details}>
        <CardHeader
          title={location.name}
          subheader={"#"+location.id}
        />
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            {/*setTypeMessage()*/}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {/*"Width:"+location.weight+" Height:"+location.height*/}
          </Typography>
        </CardContent>
      </div>
      </CardActionArea>
    </Card>

 
 </div>)
}

export default LocationCard;