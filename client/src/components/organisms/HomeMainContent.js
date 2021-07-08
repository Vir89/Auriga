import React from 'react'
import Button from '../atoms/Button'

import Div from '../atoms/Div'
import BodyContainer from '../molecules/BodyContainer'
import HeaderContainer from '../molecules/HeaderContainer'

const HomeMainContent = () => {
    return (
        <Div column>
            <HeaderContainer/>
            <BodyContainer/>
            
        </Div>
    )
}
export default HomeMainContent;