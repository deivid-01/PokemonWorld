import React  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import PlaceIcon from '@material-ui/icons/Place';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(()=>({
  title:{
    textAlign:'center',
    padding: '1px 0'
  }
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
       <Card style={{ width:'100%', height:'100%' ,display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <CardActionArea  style={{ width:'100%', height:'100%' ,display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}  onClick={onClickHandler}>    
        <CardHeader className={classes.title}
          title={location.names[1].name}
          subheader={"#"+location.id}
        />
        <CardContent   >
        <Chip 
            label={"Region: "+location.region.name[0].toUpperCase()+location.region.name.substring(1,location.region.name.length)}
            color="secondary"
            icon = {<PlaceIcon/>}
        />
      
        </CardContent>
    
      </CardActionArea>
    </Card>

 
)
}

export default LocationCard;