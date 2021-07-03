import React from 'react'
import { textData } from '../../data/textData'
import H3 from "../atoms/H3"
import Div from '../atoms/Div'


const BodyContainer = () => {
    return (
        <Div column>
           
            <Div row spaceBet>
                <H3>Kilómetros/año</H3>
                <H3>{textData.HomeProfileInfo[0].infoValue3} kms</H3>
                
            </Div >

            <Div row spaceBet>
                <H3>Valor de vehículo</H3>
                <H3>{textData.HomeProfileInfo[0].carValue} €</H3>
                
            </Div>

        
        </Div >
        
    )
}

export default BodyContainer