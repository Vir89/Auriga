import React, {useContext} from 'react';
import MainContainer from "../atoms/MainContainer"
import PageContainer from '../atoms/PageContainer';
import { AlertsContainer } from '../organisms/AlertsContainer';
import { HomeMainContent } from '../organisms/HomeMainContent';
import { ApiContext } from '../../context/ApiContext';

const Home = () => {
    const context = useContext(ApiContext);
    return (
        <PageContainer>
            
            <MainContainer>
                {context.usersLoaded&& <HomeMainContent/>}
            </MainContainer>

            <MainContainer>
                {context.usersLoaded&&<AlertsContainer/>}
            </MainContainer>
            
        </PageContainer>
    )
}

export default Home