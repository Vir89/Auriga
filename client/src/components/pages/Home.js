import React from 'react';
import MainContainer from "../atoms/MainContainer"
import PageContainer from '../atoms/PageContainer';
import { AlertsContainer } from '../organisms/AlertsContainer';
import { HomeMainContent } from '../organisms/HomeMainContent';


export const Home = () => {
    return (
        <PageContainer>

            <MainContainer>
                <HomeMainContent/>
            </MainContainer>

            <MainContainer>
                <AlertsContainer/>
            </MainContainer>
            
        </PageContainer>
    )
}
