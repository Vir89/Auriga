import React, {useState} from 'react'
import { textData } from '../../data/textData'
import BorderBottom from '../atoms/BorderBottom'
import DivColumn from '../atoms/DivColumn'
import DivRow from '../atoms/DivRow'
import H2 from '../atoms/H2'
import H3 from '../atoms/H3'
import P from '../atoms/P'


export const ProfileBodyContainer = () => {

    
    return (
        <DivColumn>
            <DivRow><H2>Area Personal</H2></DivRow>

            <DivColumn >
                <BorderBottom>
                    <H3>Email</H3>
                    <P>{textData.PersonalData[0].email}</P>
                </BorderBottom>
            </DivColumn>

            <DivColumn >
                <H3>Telefono</H3>
                < P>{textData.PersonalData[0].phone}</P>
                <BorderBottom/>
            </DivColumn>

            <DivColumn >
                <H3>Dirección Principal</H3>
                <P>{textData.PersonalData[0].address}</P>
                <BorderBottom/>
            </DivColumn>
            

            <DivColumn >
                <H3>Elección de taller predeterminada</H3>
                
            </DivColumn>

           

            

            
        </DivColumn>
    )
}
