import React, {Fragment} from 'react';
//import React, {useEffect} from 'react';
import Navbar from './components/organisms/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
//import { useDispatch, useSelector } from 'react-redux';
//import { history } from '../_helpers';
//import { alertActions } from '../_actions';
//import {PrivateRoute} from '../_components';
import { Home } from './components/pages/Home';
import {Alta} from './components/pages/Alta';
import { Profile } from './components/pages/Profile';
import { Car } from './components/pages/Car';
import fetchData from "./utils/fetchData"
import  {Login} from './components/pages/Login';
import SSOLogin from './components/pages/SSOLogin';


{/*function App() {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {

      dispatch(alertActions.clear());

    });
  }, []);
*/}

import MoreTypeSuscription from './components/molecules/MoreTypeSuscription';


  
const App = (props) => {
  return (


  //  {alert.message &&
    //  <div className={'alert ${alert.type}'}>{alert.message}
     // </div>
    //}

    <Fragment>           
    
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

    </Fragment>

  );

  
};

//}



export default App;
