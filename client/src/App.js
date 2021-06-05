import React from 'react';
import Navbar from './components/organisms/nav/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Home } from './components/pages/Home';


  
const App = () => {
  return (
    <>    
        <Router>          
          <Navbar />          
          <Switch>
            <Route exact path='/' component={Home}/>
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
