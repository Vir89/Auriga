import React, {Fragment} from 'react';
import Navbar from './components/organisms/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/pages/Home';
//import Alta from './components/pages/Alta';
import FormSignup from './components/pages/FormSignup';
import Profile from './components/pages/Profile';
import Car from './components/pages/Car';
import Login from './components/pages/Login';
import MoreTypeSuscription from './components/molecules/MoreTypeSuscription';




const App = (props) => {
  return (


    <Router>           
    
          <Navbar />          

          <Switch>
            
            <Route path='/registro'  render={props => <FormSignup {...props} /> }/>
            <Route path='/home'  render={props => <Home {...props} /> }/>
            <Route path='/area-coches'  render={props => <Car {...props} /> }/>
            <Route path='/area-personal' render={props => <Profile {...props} /> }/>
            <Route path='/mensajes' />
            <Route path='/suscripciones' render={props => <MoreTypeSuscription {...props} /> }/>
            <Route path='/contacto' />
            <Route path='/cerrar-sesion' />
            <Route exact path='/' render={props => <Login {...props} /> }/>
            <Redirect from ="*" to= "/"/>
          </Switch>

    </Router>

  );

  
};


export default App;