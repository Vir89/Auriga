import React, {useContext} from 'react'
import Div from '../atoms/Div'
import H2 from '../atoms/H2'
import H3 from '../atoms/H3'
import P from '../atoms/P'
import { ApiContext } from '../../context/ApiContext';
import Span from '../atoms/Span';
import { HiPencilAlt } from "react-icons/hi";





export const ProfileBodyContainer = () => {

    const context = useContext(ApiContext);
   
    return (
        
            <Div column center>
                <H2>Area Personal</H2>
              

                <P profile tag="Nombre">
                    {context.user.personalDetails.firstName}
                    
                </P>
                <P profile tag="Apellidos">
                    {context.user.personalDetails.lastName}
                </P>
                <P profile tag="Email">
                    {context.user.personalDetails.email}
                </P>
                <P profile tag="Teléfono">
                    {context.user.personalDetails.phoneNumber}
                    <HiPencilAlt/>
                </P>
                

                <H3>Dirección Principal</H3>
                <P profile tag="Calle">
                    {context.user.personalDetails.address.street}
                    <HiPencilAlt/>
                </P>
                <P profile tag="Código Postal">
                    {context.user.personalDetails.address.postalCode}
                    <HiPencilAlt/>
                </P>
                <P profile tag="Ciudad">
                     {context.user.personalDetails.address.city}
                    <HiPencilAlt/>
                </P>

                <H3>Suscripción</H3>

                <P profile tag="Tipo">
                     {context.user.personalDetails.suscriptionPlan}
                </P>

                



        
               
            </Div>

    
    )
}
