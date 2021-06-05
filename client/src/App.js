import React from 'react';
//import styled from 'styled-components/macro';
import Navbar from './components/organisms/nav/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'



const App = () => {
  return (
    <>    
        <Router>          
          <Navbar />          
          <Switch>
            <Route exact path='/' />
          </Switch>
          <Switch>
            <Route path='/area-coches' />
          </Switch>
          <Switch>
            <Route path='/area-personal' />
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
