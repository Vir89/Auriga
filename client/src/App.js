import React from 'react';
import Navbar from './components/organisms/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home';
//import Alta from './components/pages/Alta';
import FormSignup from './components/pages/FormSignup';
import Profile from './components/pages/Profile';
import Car from './components/pages/Car';
import Login from './components/pages/Login';
import MoreTypeSuscription from './components/molecules/MoreTypeSuscription';
import Slider from './components/organisms/Slider';


const App = (props) => {
  return (


    <Router>           
    
          <Navbar />          

          <Switch>

            
            <Route path='/registro'  render={props => <FormSignup {...props} /> }/>
            <Route exact path='/'  render={props => <Home {...props} /> }/>
            <Route path='/area-coches'  render={props => <Car {...props} /> }/>
            <Route path='/area-personal' render={props => <Profile {...props} /> }/>
            <Route path='/mensajes' />
            <Route path='/suscripciones' render={props => <MoreTypeSuscription {...props} /> }/>
            <Route path='/contacto' />
            <Route path='/cerrar-sesion' />

            <Route exact path='/login' render={props => <Login {...props} /> }/>

            <Route exact path='/slider' render={props => <Slider {...props} /> }/>

            {/*<Redirect from ="*" to= "/"/>*/}

          </Switch>

    </Router>

  );

  
};


export default App;