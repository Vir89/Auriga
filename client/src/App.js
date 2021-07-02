import React, {Fragment} from 'react';
import Navbar from './components/organisms/Navbar';
import { Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import {Alta} from './components/pages/Alta';
import { Profile } from './components/pages/Profile';
import { Car } from './components/pages/Car';
import fetchData from "./utils/fetchData"
import Login from './components/pages/Login';
import SSOLogin from './components/pages/SSOLogin';
import MoreTypeSuscription from './components/molecules/MoreTypeSuscription';

  
const App = (props) => {
  return (
    <div>
      <Navbar />           
          <Switch>
            <Route exact path='/'  render={props => <Home {...props} /> }/>
          </Switch>
          <Switch>
            <Route path='/registro'  render={props => <Alta {...props} /> }/>
          </Switch>   
          <Switch>
            <Route path='/login'  render={props => <Login {...props} /> }/>
          </Switch>   
          <Switch>
            <Route path='/logingoogle'  render={props => <SSOLogin {...props} /> }/>
          </Switch>   
          <Switch>
            <Route path='/area-coches'  render={props => <Car {...props} /> }/>
          </Switch>
          <Switch>
            <Route path='/area-personal' render={props => <Profile {...props} /> }/>
          </Switch>
          <Switch>
            <Route path='/mensajes' />
          </Switch>
          <Switch>
            <Route path='/suscripciones' render={props => <MoreTypeSuscription {...props} /> }/>
          </Switch>
          <Switch>
            <Route path='/contacto' />
          </Switch>
          <Switch>
            <Route path='/cerrar-sesion' />
          </Switch>
    </div>
  );

  
};



export default App;
