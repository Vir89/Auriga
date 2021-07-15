import React, {useContext} from 'react';
import Section from "../atoms/Section"
import Main from '../atoms/Main';
import SuscriptionContainer from '../organisms/SuscriptionContainer';
import { AlertsContainer } from '../organisms/AlertsContainer';
//import { userActions } from '../_actions';
import HomeMainContent from '../organisms/HomeMainContent';
import {ApiContext} from '../../context/ApiContext';
import Slider from '../organisms/Slider';


const Home = (props) => {

    const context = useContext(ApiContext);
    //const users = useSelector(state => state.users);
    //onst user = useSelector(state => state.authentication.user);
   // const dispatch = useDispatch();

   // useEffect (() => {
     //   dispatch(userActions.getAll());
    //}, []);

  //  function handleDeleteUser(id) {
    //    dispatch(userActions.delete(id));

    //}
    

    return (
        
        <Main>            
            <Section>

            <Slider/>
                {/* {context.usersLoaded&&<HomeMainContent/>}
            </Section>

            <Section>
                {context.usersLoaded&&<SuscriptionContainer {...props}/>}
            </Section>

            <Section>
                {context.usersLoaded&&<AlertsContainer/>} */}
            </Section>            
        </Main>

    )
    
    }

export default Home;

