import React, {useContext, useState} from 'react'
import Div from '../atoms/Div'
import H2 from '../atoms/H2'
import H3 from '../atoms/H3'
import P from '../atoms/P'
import { ApiContext } from '../../context/ApiContext';
import ProfileDataInput from '../molecules/ProfileDataInput'
import Editable from '../molecules/Editable'


export const ProfileBodyContainer = () => {

    const context = useContext(ApiContext);
    /* 
    const [personalDetails, setPersonalDetails] = useState({
        firstName="",
        lastName="",
        address="",
        city="",
        country="",
        postalCode="",
    })
     */
    return (
        <Div column>

            {/* {personalDetails.map(element=><Editable placeholder={`${input}..`}/>)} */}

            {/* <Div row><H2>Area Personal</H2></Div>
            {details.map((item, index)=>
                    <ProfileDataInput
                    key = {index}
                    item = {item}
                   />)}
 */}
        

            {/* <Div row><H2>Area Personal</H2></Div>
            <Div column borderBottom >
                    <H3>Nombre</H3>
                    <P>{context.user[0].personalDetails.firstName}</P>
            </Div>

            <Div column borderBottom>
            
                    <H3>Apellidos</H3>
                    <P>{context.user[0].personalDetails.lastName}</P>
                
            </Div>

            <Div column borderBottom>
                
                    <H3>Email</H3>
                    <P>{context.user[0].personalDetails.email}</P>
                
            </Div>

            <Div column borderBottom>
                
                <H3>Telefono</H3>
                < P>{context.user[0].personalDetails.phoneNumber}</P>
               
            </Div>
 */}
            <Div column borderBottom>
                
                <H3>Dirección Principal</H3>
                <P> Calle: {context.user[0].personalDetails.address.street}</P>
                <P> Código postal: {context.user[0].personalDetails.address.postalCode}</P>
                <P> Ciudad: {context.user[0].personalDetails.address.city}</P>
               
            </Div>

            <Div column borderBottom>
                <H3>Elección de taller predeterminada</H3>
            </Div>
        </Div>
    )
}
