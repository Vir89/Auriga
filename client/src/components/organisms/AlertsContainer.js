import React from 'react'
import DivColumn from '../atoms/DivColumn'
import H3 from '../atoms/H3'
import { AlertWarning } from '../molecules/AlertWarning'

export const AlertsContainer = () => {
    return (
        <DivColumn>
            <H3>Avisos pendientes</H3>
            <AlertWarning/>
           
            
        </DivColumn>
    )
}
