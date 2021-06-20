import React, {useState, useEffect} from 'react';
import Navbar from './components/organisms/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Home } from './components/pages/Home';
import {Alta} from './components/pages/Alta';
import { Profile } from './components/pages/Profile';
import { Car } from './components/pages/Car';
import fetchData from "./utils/fetchData"
import Login from './components/pages/Login';
import SSOLogin from './components/pages/SSOLogin';


  
const App = () => {
  return (

    

    <>           
        <Router>        
          <Navbar />          
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
          <Switch>
            <Route path='/registro' component={Alta}/>
          </Switch>   
          <Switch>
            <Route path='/login' component={Login}/>
          </Switch>   
          <Switch>
            <Route path='/logingoogle' component={SSOLogin}/>
          </Switch>   
          <Switch>
            <Route path='/area-coches' component={Car}/>
          </Switch>
          <Switch>
            <Route path='/area-personal' component={Profile}/>
          </Switch>
          <Switch>
            <Route path='/mensajes' />
          </Switch>
          <Switch>
            <Route path='/suscripciones' />
          </Switch>
          <Switch>
            <Route path='/contacto' />
          </Switch>
          <Switch>
            <Route path='/cerrar-sesion' />
          </Switch>
        </Router>       
    </>
  );

  
};



export default App;
