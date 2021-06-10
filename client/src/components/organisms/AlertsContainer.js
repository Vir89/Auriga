import React from 'react'
import DivColumn from '../atoms/DivColumn'
import H2 from '../atoms/H2'

import { AlertDanger } from '../molecules/AlertDanger'
import { AlertSuccess } from '../molecules/AlertSuccess'
import { AlertWarning } from '../molecules/AlertWarning'

export const AlertsContainer = () => {
    return (
        <DivColumn>
            <H2>Avisos pendientes</H2>
            
            <AlertDanger/>
            <AlertWarning/>
            <AlertSuccess/>
           
            
        </DivColumn>
    )
}
