import Home from './components/Home/Home'
import Generations from './components/Generations/Generations'
import Locations from './components/Locations/Locations'
import Pokedex from './components/Pokedex/Pokedex'
import PokemonInfo from './components/Pokedex/PokemonInfo'
import NavBar from './components/NavBar'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div>
  
    <BrowserRouter>
      <Switch>
        <Redirect exact path="/" to="/home" />
        <Route path="/home" render={ (props) => 
              <div>
              <NavBar></NavBar>
                <Home { ...props } /> 
                </div> 
              }
        />
        <Route path="/generations" render={ (props) => 
                <div>
                <NavBar></NavBar>
                <Generations { ...props } />
                </div>  
              }
      
        />
        <Route path="/pokedex" render={ (props) => 
              <div>
              <NavBar></NavBar>
                <Pokedex { ...props } /> 
                </div>
              }
      
        />
                <Route path="/locations" render={ (props) => 
               <div>
               <NavBar></NavBar>
                <Locations { ...props } />  
                </div>
              }
      
        />
                 
    
        {/* Redirect unhandled routes */}
        <Route>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
