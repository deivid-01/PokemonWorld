import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:'rgba(0,0,0,0.5)'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar() {

  const history = useHistory();
  const classes = useStyles();

  const PATH_HOME='/home';
  const PATH_POKEDEX='/pokedex';
  const PATH_LOCATIONS='/locations';
  const PATH_GENERATIONS='/generations';

  const onChangesTab = (page,e)=>{
      console.log(page)
    history.push(page)
  }

  return (
  
      <AppBar className={classes.root} position="static">
        <Toolbar>
        <Button onClick={onChangesTab.bind(this,PATH_HOME)} color="inherit" className={classes.menuButton}>
          <Typography variant="h6" className={classes.title}> 
            Pokemon world
          </Typography>
          </Button>
         
          <Button onClick={onChangesTab.bind(this,PATH_POKEDEX)} color="inherit">
          <Typography variant="h6" className={classes.title}>
            Pokedex
          </Typography>
          </Button>
          <Button onClick={onChangesTab.bind(this,PATH_LOCATIONS)} color="inherit">
          <Typography variant="h6" className={classes.title}>
            Locations
          </Typography>
          </Button>
          <Button onClick={onChangesTab.bind(this,PATH_GENERATIONS)} color="inherit">
          <Typography variant="h6" className={classes.title}>
            Generations
          </Typography>
          </Button>
        </Toolbar>
      </AppBar>
  
  );
}

export default NavBar;