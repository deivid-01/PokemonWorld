import Home from './components/Home/Home'
import Generations from './components/Generations/Generations'
import Locations from './components/Locations/Locations'
import Pokedex from './components/Pokedex/Pokedex'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
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
                <br></br>
                <Footer/> 
                </div> 
              }
        />
        <Route path="/generations" render={ (props) => 
                <div>
              <NavBar></NavBar>
                <Generations { ...props } />
                <Footer/> 
                </div>  
              }
      
        />
        <Route path="/pokedex" render={ (props) => 
              <div>
              <NavBar></NavBar>
                <Pokedex { ...props } /> 
                <Footer/> 
                </div>
              }
      
        />
                <Route path="/locations" render={ (props) => 
               <div>
               <NavBar></NavBar>
                <Locations { ...props } /> 
                <Footer/>  
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
