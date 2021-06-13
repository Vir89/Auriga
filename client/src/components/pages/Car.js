import React from 'react'
import MainContainer from '../atoms/MainContainer'
import PageContainer from '../atoms/PageContainer'
import { CarStatusContainer } from '../organisms/CarStatusContainer'


export const Car = () => {
    return (
        <PageContainer>
            <MainContainer>
                <CarStatusContainer/>

            </MainContainer>
        
            
            
        </PageContainer>
    )
}
