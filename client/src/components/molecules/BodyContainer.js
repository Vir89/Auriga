import React from 'react'
import { textData } from '../../data/textData'
import H3 from "../atoms/H3"
import Div from '../atoms/Div'


export const BodyContainer = () => {
    return (
        <Div column>
            {/* <DivRow>
                <P>Coste por Kilómetro</P>
                <H3>{textData.HomeProfileInfo[0].infoValue1} €</H3>
                
            </DivRow>
            <DivRow>
                <P>CPK medio</P>
                <P>{textData.HomeProfileInfo[0].infoValue2} €</P>
                
            </DivRow> */}
            <Div row spaceBet>
                <H3>Kilómetros/año</H3>
                <H3>{textData.HomeProfileInfo[0].infoValue3} kms</H3>
                
            </Div >

            
           
            {/* <DivRow>
                <P>KPV medio</P>
                <P>{textData.HomeProfileInfo[0].infoValue4} kms</P>
                
            </DivRow> */}
            <Div row spaceBet>
                <H3>Valor de vehículo</H3>
                <H3>{textData.HomeProfileInfo[0].carValue} €</H3>
                
            </Div>

        
        </Div >
        
    )
}
