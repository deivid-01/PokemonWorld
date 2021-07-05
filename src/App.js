import Home from './components/Home/Home'
import Generations from './components/Generations/Generations'
import Locations from './components/Locations/Locations'
import Pokedex from './components/Pokedex/Pokedex'
import PokemonInfo from './components/Pokedex/PokemonInfo'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import './App.css'

function App() {
  return (
    
    <BrowserRouter>
      <Switch>
        <Redirect exact path="/" to="/home" />
        <Route path="/home" render={ (props) => 
              
                <Home { ...props } />  
              }
        />
        <Route path="/generations" render={ (props) => 
                <Generations { ...props } />  
              }
      
        />
        <Route path="/pokedex" render={ (props) => 
             
                <Pokedex { ...props } /> 
             
              }
      
        />
                <Route path="/locations" render={ (props) => 
               
                <Locations { ...props } />  
             
              }
      
        />
                        <Route path="/pokemoninfo" render={ (props) => 
                <PokemonInfo { ...props } />  
              }
      
        />
        {/* Redirect unhandled routes */}
        <Route>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
