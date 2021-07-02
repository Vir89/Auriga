import React, {useContext} from 'react'
import BorderBottom from '../atoms/BorderBottom'
import Div from '../atoms/Div'
import H2 from '../atoms/H2'
import H3 from '../atoms/H3'
import P from '../atoms/P'
import { ApiContext } from '../../context/ApiContext';


export const ProfileBodyContainer = () => {

    const context = useContext(ApiContext);
    
    return (
        <Div column>
            <Div row><H2>Area Personal</H2></Div>
            <Div column >
                <BorderBottom>
                    <H3>Nombre</H3>
                    <P>{context.user[0].personalDetails.firstName}</P>
                </BorderBottom>
            </Div>
            <Div column >
                <BorderBottom>
                    <H3>Apellidos</H3>
                    <P>{context.user[0].personalDetails.lastName}</P>
                </BorderBottom>
            </Div>

            <Div column >
                <BorderBottom>
                    <H3>Email</H3>
                    <P>{context.user[0].personalDetails.email}</P>
                </BorderBottom>
            </Div>

            <Div column >
            <BorderBottom>
                <H3>Telefono</H3>
                < P>{context.user[0].personalDetails.phoneNumber}</P>
                </BorderBottom>
            </Div>

            <Div column >
                <BorderBottom>
                <H3>Dirección Principal</H3>
                <P> Calle: {context.user[0].personalDetails.address.street}</P>
                <P> Código postal: {context.user[0].personalDetails.address.postalCode}</P>
                <P> Ciudad: {context.user[0].personalDetails.address.city}</P>
                </BorderBottom>
            </Div>
            

            <Div column >
                <H3>Elección de taller predeterminada</H3>
                
            </Div>
        </Div>
    )
}
