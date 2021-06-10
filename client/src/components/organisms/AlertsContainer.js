
import React from 'react'
import DivColumn from '../atoms/DivColumn'
import H2 from '../atoms/H2'
import {textData} from '../../data/textData'


import { Alert } from '../molecules/Alert'

export const AlertsContainer = () => {
    return (
        <DivColumn>
            <H2>Avisos pendientes</H2>
            {textData.Alerts.map((alert, n)=>
                <Alert
                key={n}
                alert ={alert}/>)}
            
            
        </DivColumn>
    )
}
