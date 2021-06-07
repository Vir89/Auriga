import React from 'react'
import DivColumn from '../atoms/DivColumn'
import DivRow from '../atoms/DivRow'
import H2 from '../atoms/H2'
import H3 from '../atoms/H3'
import P from '../atoms/P'

export const PersonalBodyContainer = () => {
    return (
        <DivColumn>
            <DivRow><H2>Area Personal</H2></DivRow>

            <DivColumn >
                <H3>Email</H3>
                <P>email@email.com</P>
            </DivColumn>

            <DivColumn >
                <H3>Telefono</H3>
                < P>62 666 22 22</P>
            </DivColumn>

            <DivColumn >
                <H3>Dirección Principal</H3>
                <P>Calle Abcede 1</P>
            </DivColumn>

            <DivColumn >
                <H3>Elección de taller predeterminada</H3>
                
            </DivColumn>

            

            
        </DivColumn>
    )
}
