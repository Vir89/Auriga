import React, {useContext} from 'react'
import Section from '../atoms/Section'
import Main from '../atoms/Main'
import { ProfileBodyContainer } from '../organisms/ProfileBodyContainer'
import { ApiContext } from '../../context/ApiContext';


const Profile = () => {

    const context = useContext(ApiContext);

    return (
        <Main>
            <Section>

                {context.usersLoaded&&
                <ProfileBodyContainer/>}
                

            </Section>
        
            
            
        </Main>
    )
}

export default Profile