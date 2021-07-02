import React, {useContext, useEffect} from 'react';
import MainContainer from "../atoms/MainContainer"
import PageContainer from '../atoms/PageContainer';
import SuscriptionContainer from '../organisms/SuscriptionContainer';
import { AlertsContainer } from '../organisms/AlertsContainer';


import { Link } from 'react-router-dom';
//import { userActions } from '../_actions';

import HomeMainContent from '../organisms/HomeMainContent';
import {ApiContext} from '../../context/ApiContext';


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
        
        <PageContainer>
            
            <MainContainer>
                {context.usersLoaded&&<HomeMainContent/>}
            </MainContainer>

            <MainContainer>
                {context.usersLoaded&&<SuscriptionContainer {...props}/>}
            </MainContainer>

            <MainContainer>
                {context.usersLoaded&&<AlertsContainer/>}
            </MainContainer>


            
        </PageContainer>



    )
    
    }

}
export default Home;
