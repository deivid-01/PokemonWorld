import Home from './components/Home'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path="/" to="/home" />
        <Route path="/home" render={ (props) => 
              <div className="App">
                <Home { ...props } />  
              </div> }/>
        {/* Redirect unhandled routes */}
        <Route>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
