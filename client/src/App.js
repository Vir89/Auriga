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
            <Route path='/' />
          </Switch>
        </Router>       
    </>
  );
};



export default App;
