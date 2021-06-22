
import React, {useContext} from 'react'
import DivColumn from '../atoms/DivColumn'
import H2 from '../atoms/H2'
import {textData} from '../../data/textData'
import { Alert } from '../molecules/Alert'
import { Alert2 } from '../molecules/Alert2'
import { ApiContext } from '../../context/ApiContext';


    

export const AlertsContainer = () => {

    const context = useContext(ApiContext);
    
    return (
        <DivColumn>
            <H2>Avisos pendientes</H2>

            {context.user[0].cars[0].variableFeatures.alerts.map((alert, n)=>
                <Alert
                key={n}
                alert ={alert}/>)}
            
            {context.user[0].cars[0].variableFeatures.alerts.map((alert, n)=>
                <Alert2
                key={n}
                alert ={alert}/>)}
            
        </DivColumn>
    )
}
