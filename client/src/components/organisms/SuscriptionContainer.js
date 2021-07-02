import React from 'react'
import Div from '../atoms/Div'
import SuscriptionType from '../molecules/SuscriptionType'


const SuscriptionContainer = (props) => {
    return (

        <Div column>
            <SuscriptionType {...props}/>
        </Div>
        
    )
}
export default SuscriptionContainer;