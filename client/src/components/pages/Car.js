import React, {useContext} from 'react'
import Section from '../atoms/Section'
import Main from '../atoms/Main'
import { CarStatusContainer } from '../organisms/CarStatusContainer'
import { ApiContext } from '../../context/ApiContext';


const Car = () => {
    const context = useContext(ApiContext);
    return (
        <Main>
            <Section>
                {context.usersLoaded&&
                <CarStatusContainer/>}

            </Section>
        
            
            
        </Main>
    )
}

export default Car