import React, {useContext} from 'react'
import BorderBottom from '../atoms/BorderBottom'
import DivColumn from '../atoms/DivColumn'
import DivRow from '../atoms/DivRow'
import H2 from '../atoms/H2'
import H3 from '../atoms/H3'
import P from '../atoms/P'
import { ApiContext } from '../../context/ApiContext';


export const ProfileBodyContainer = () => {

    const context = useContext(ApiContext);
    
    return (
        <DivColumn>
            <DivRow><H2>Area Personal</H2></DivRow>
            <DivColumn >
                <BorderBottom>
                    <H3>Nombre</H3>
                    <P>{context.user[0].personalDetails.firstName}</P>
                </BorderBottom>
            </DivColumn>
            <DivColumn >
                <BorderBottom>
                    <H3>Apellidos</H3>
                    <P>{context.user[0].personalDetails.lastName}</P>
                </BorderBottom>
            </DivColumn>

            <DivColumn >
                <BorderBottom>
                    <H3>Email</H3>
                    <P>{context.user[0].personalDetails.email}</P>
                </BorderBottom>
            </DivColumn>

            <DivColumn >
            <BorderBottom>
                <H3>Telefono</H3>
                < P>{context.user[0].personalDetails.phoneNumber}</P>
                </BorderBottom>
            </DivColumn>

            <DivColumn >
                <BorderBottom>
                <H3>Dirección Principal</H3>
                <P> Calle: {context.user[0].personalDetails.address.street}</P>
                <P> Código postal: {context.user[0].personalDetails.address.postalCode}</P>
                <P> Ciudad: {context.user[0].personalDetails.address.city}</P>
                </BorderBottom>
            </DivColumn>
            

            <DivColumn >
                <H3>Elección de taller predeterminada</H3>
                
            </DivColumn>
        </DivColumn>
    )
}
