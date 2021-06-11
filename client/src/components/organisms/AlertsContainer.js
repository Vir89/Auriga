
import React from 'react'
import DivColumn from '../atoms/DivColumn'
import H2 from '../atoms/H2'
import {textData} from '../../data/textData'


import { Alert } from '../molecules/Alert'
import { Alert2 } from '../molecules/Alert2'

export const AlertsContainer = () => {
    return (
        <DivColumn>
            <H2>Avisos pendientes</H2>
            {textData.Alerts.map((alert, n)=>
                <Alert
                key={n}
                alert ={alert}/>)}
            
            {textData.Alerts.map((alert, n)=>
                <Alert2
                key={n}
                alert ={alert}/>)}
            
        </DivColumn>
    )
}
