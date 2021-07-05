import React from "react";
import './Footer.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Icon, IconButton,Divider } from "@material-ui/core";
import bar_logo from '../../assets/pokeball.png'

const Footer = () => (
  <footer>
   
  
    <div>
      Created by David Torres  | 
      <a href="https://github.com/deivid-01/PokemonWorld"> Source code</a>

    </div>
    
    
      <div>
      Contact: datcx@hotmail.com
      </div>
    <div>
     
      <IconButton href="https://github.com/deivid-01" style={{color:'rgb(255,255,255)'}} target="_blank" >
      <GitHubIcon  color="interit"/>
    </IconButton>
    <IconButton href="https://www.linkedin.com/in/david-torres-81075b182/" style={{color:'rgb(255,255,255)'}}  target="_blank">
      <LinkedInIcon/>
    </IconButton>
    </div>
 
  
   
  </footer>
);

export default Footer;
