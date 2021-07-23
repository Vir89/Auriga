import React, {useContext, useState} from 'react'
import Div from '../atoms/Div'
import H2 from '../atoms/H2'
import H3 from '../atoms/H3'
import P from '../atoms/P'
import { ApiContext } from '../../context/ApiContext';



export const ProfileBodyContainer = () => {

    const context = useContext(ApiContext);
   
    return (
        
            <Div column borderBottom>
                <H2>Area Personal</H2>
                <H3>Nombre:</H3><P>{context.user.personalDetails.firstName}</P>
                <H3>Apellidos:</H3><P>{context.user.personalDetails.lastName}</P>
                <H3>Email:</H3><P> {context.user.personalDetails.email}</P>
                <H3>Teléfono:</H3><P>{context.user.personalDetails.phoneNumber}</P>
                
                <H3>Dirección Principal</H3>
                <P> Calle: {context.user.personalDetails.address.street}</P>
                <P> Código postal: {context.user.personalDetails.address.postalCode}</P>
                <P> Ciudad: {context.user.personalDetails.address.city}</P>
                {context.user.personalDetails.suscriptor && <H3>Suscripción: {context.user.personalDetails.suscriptionPlan}</H3> }
            
               
            </Div>

    
    )
}
