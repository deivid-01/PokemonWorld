import Home from './components/Home/Home'
import Generations from './components/Generations/Generations'
import Locations from './components/Locations/Locations'
import Pokedex from './components/Pokedex/Pokedex'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import './App.css'

function App() {

  const BASEPATH='/PokemonWorld'
  return (
    <div>
  
    <BrowserRouter>
      <Switch>
        <Redirect exact path="/" to={BASEPATH+"/home"} />
        <Route path={BASEPATH+"/home"}render={ (props) => 
              <div>
              <NavBar></NavBar>
                <Home { ...props } />
                <br></br>
              
                </div> 
              }
        />
        <Route path={BASEPATH+"/generations"} render={ (props) => 
                <div>
              <NavBar></NavBar>
                <Generations { ...props } />
              
                </div>  
              }
      
        />
        <Route path={BASEPATH+"/pokedex"} render={ (props) => 
              <div>
              <NavBar></NavBar>
                <Pokedex { ...props } /> 
              
                </div>
              }
      
        />
                <Route path={BASEPATH+"/locations"} render={ (props) => 
               <div>
               <NavBar></NavBar>
                <Locations { ...props } /> 
                
                </div>
              }
      
        />
                 
    
        {/* Redirect unhandled routes */}
        <Route>
          <Redirect to={BASEPATH+"/home"} />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
