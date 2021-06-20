import React, {useContext} from 'react'
import MainContainer from '../atoms/MainContainer'
import PageContainer from '../atoms/PageContainer'
import { CarStatusContainer } from '../organisms/CarStatusContainer'
import { ApiContext } from '../../context/ApiContext';


export const Car = () => {
    const context = useContext(ApiContext);
    return (
        <PageContainer>
            <MainContainer>
                {context.usersLoaded&&
                <CarStatusContainer/>}

            </MainContainer>
        
            
            
        </PageContainer>
    )
}
