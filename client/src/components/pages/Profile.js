import React, {useContext} from 'react'
import MainContainer from '../atoms/MainContainer'
import PageContainer from '../atoms/PageContainer'
import { ProfileBodyContainer } from '../organisms/ProfileBodyContainer'
import { ApiContext } from '../../context/ApiContext';


export const Profile = () => {

    



    const context = useContext(ApiContext);
    return (
        <PageContainer>
            <MainContainer>

                {context.usersLoaded&&
                <ProfileBodyContainer/>}
                

            </MainContainer>
        
            
            
        </PageContainer>
    )
}
