import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom'
import './NavBar.css'
import bar_logo from '../../assets/pokemonworld.png'

const useStyles = makeStyles((theme) => ({
  title: { flexGrow: 10,},
}));

function NavBar() {

  const history = useHistory();
  const classes = useStyles();

  const PATH_HOME='/home';
  const PATH_POKEDEX='/pokedex';
  const PATH_LOCATIONS='/locations';
  const PATH_GENERATIONS='/generations';

  const onChangesTab = (page,e)=>{
     
    history.push(page)
  }

  return (
  
      <AppBar 
      style={{
        background:'rgba(0,0,0,0.25)',
        flexGrow: 1
      }}
      position="static">
        <Toolbar>
          <div className="col">
            <Button onClick={onChangesTab.bind(this,PATH_HOME)} color="inherit" >
                <img src={bar_logo} className="bar-logo"/>
              </Button>
          </div>
          <div >
            <Button onClick={onChangesTab.bind(this,PATH_HOME)} color="inherit">
              <Typography variant="h6" >
                Home
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
            </div>
        </Toolbar>
      </AppBar>
  
  );
}

export default NavBar;