import React, {useContext} from 'react'
import H3 from "../atoms/H3"
import Div from '../atoms/Div'
import { ApiContext } from '../../context/ApiContext';


const BodyContainer = () => {
    const context = useContext(ApiContext);
    return (
        <Div column>
           
            <Div row spaceBet>
                <H3>Kilómetros/año</H3>
                <H3>{context.user.cars[0].variableFeatures.kM} kms</H3>
                
            </Div >

            <Div row spaceBet>
                <H3>Valor de vehículo</H3>
                <H3>{context.user.cars[0].variableFeatures.currentValue} €</H3>
                
            </Div>

        
        </Div >
        
    )
}

export default BodyContainer