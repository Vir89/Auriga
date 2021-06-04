import React from 'react'
import { textData } from '../../data/textData'
import DivRow from '../atoms/DivRow'
import P from "../atoms/P"
import H3 from "../atoms/H3"


export const BodyContainer = () => {
    return (
        <>
            <DivRow>
                <P>Coste por Kilómetro</P>
                <H3>{textData.HomeProfileInfo[0].infoValue1} €</H3>
                
            </DivRow>
            <DivRow>
                <P>CPK medio</P>
                <P>{textData.HomeProfileInfo[0].infoValue2} €</P>
                
            </DivRow>
            <DivRow>
                <P>Kilómetros/año</P>
                <H3>{textData.HomeProfileInfo[0].infoValue3} kms</H3>
                
            </DivRow>
            <DivRow>
                <P>KPV medio</P>
                <P>{textData.HomeProfileInfo[0].infoValue4} kms</P>
                
            </DivRow>
            <DivRow>
                <P>Valor actual de tu vehículo</P>
                <H3>{textData.HomeProfileInfo[0].carValue} €</H3>
                
            </DivRow>

        
        </>
        
    )
}
