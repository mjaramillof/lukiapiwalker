import React from 'react';
import './App.css';
import Films from './views/Films';
import People from './views/People';
import Planets from './views/Planets';
import Species from './views/Species';
import Starships from './views/Starships';
import Vehicles from './views/Vehicles';
import Home from './views/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './controllers/Menu';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* dropdown menu */}
        <Menu/>
        {/* routes */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/planets">
            <Planets />
          </Route>
          <Route path="/films">
            <Films />
          </Route>
          <Route path="/starships">
            <Starships />
          </Route>
          <Route path="/vehicles">
            <Vehicles />
          </Route>
          <Route path="/species">
            <Species />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
      
  );
}

export default App;
