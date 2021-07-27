import React, {useContext} from 'react';
import Navbar from './components/organisms/Navbar';
import { BrowserRouter as Router, Switch, Redirect, Route} from 'react-router-dom'
import Home from './components/pages/Home';
//import Alta from './components/pages/Alta';
import FormSignup from './components/pages/FormSignup';
import Profile from './components/pages/Profile';
import Car from './components/pages/Car';
import Login from './components/pages/Login';
import MoreTypeSuscription from './components/molecules/MoreTypeSuscription';
import { ApiContext } from './context/ApiContext';


const App = (props) => {

  const context = useContext(ApiContext);
  return (


    <Router>           
    
          <Navbar />          

          <Switch>

            <Route path='/registro'  render={props => <FormSignup {...props} /> }/>

            <Route path='/login'  render={props => <Login {...props} /> }/>

            <Route exact path='/' render={props => context.usersLoaded 
                ? (<Home {...props} />) 
                : (<Redirect to="/login" />) 
              }
            />
    
            <Route path='/area-coches'  render={props => context.usersLoaded 
                ? (<Car {...props} />) 
                : (<Redirect to="/login" />) 
              }
            /> 


            <Route path='/area-personal' render={props => context.usersLoaded 
                ? (<Profile {...props} />) 
                : (<Redirect to="/login" />) 
              }
            />
  
            <Route path='/mensajes' />
            
            <Route path='/suscripciones' render={props => context.usersLoaded 
                ? (<MoreTypeSuscription {...props} />) 
                : (<Redirect to="/login" />) 
              }
            />
            
            <Route path='/contacto' />

          </Switch>

    </Router>

  );

  
};


export default App;