import React from 'react';
import Navbar from './components/organisms/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Alta from './components/pages/Alta';
import Profile from './components/pages/Profile';
import Car from './components/pages/Car';
import Login from './components/pages/Login';
import MoreTypeSuscription from './components/molecules/MoreTypeSuscription';
import SSOLogin from './components/pages/SSOLogin';
import Slider from './components/organisms/Slider';
//import { useDispatch, useSelector } from 'react-redux';
//import { history } from '../_helpers';
//import { alertActions } from '../_actions';
//import {PrivateRoute} from '../_components';


/*function App() {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {

      dispatch(alertActions.clear());

    });
  }, []);
*/

const App = (props) => {
  return (


  //  {alert.message &&
    //  <div className={'alert ${alert.type}'}>{alert.message}
     // </div>
    //}

    <Router>           
    
          <Navbar />          

          <Switch>
            <Route exact path='/'  render={props => <Home {...props} /> }/>
            <Route path='/area-coches'  render={props => <Car {...props} /> }/> 
            <Route path='/registro'  render={props => <Alta {...props} /> }/>
            <Route path='/login'  render={props => <Login {...props} /> }/>
            <Route path='/logingoogle'  render={props => <SSOLogin {...props} /> }/>
            
            <Route path='/area-personal' render={props => <Profile {...props} /> }/>
            <Route path='/mensajes' />
            <Route path='/suscripciones' render={props => <MoreTypeSuscription {...props} /> }/>
            <Route path='/contacto' />
            <Route path='/cerrar-sesion' />
            <Route path='/swiper' render={props => <Slider {...props} /> }/>
          </Switch>

    </Router>

  );

  
};

//}



export default App;
