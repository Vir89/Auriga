import React, { useContext } from 'react'
import Div from '../atoms/Div'
import H3 from "../atoms/H3"
import H2 from "../atoms/H2"
import {ApiContext} from '../../context/ApiContext';
import getSuscriptionPlanFromObject from '../../utils/getSuscriptionPlanFromObject';


const SuscriptionType = (props) => {

    const handleButtonSuscription = () => {


        props.history.push({
            pathname: "/suscripciones"
  
        }) 

    }
    
        const context = useContext(ApiContext);

    



    return (
            <Div row spaceBet onClick={handleButtonSuscription}>
                <H2>Tipo de Suscripción mi.Auriga:</H2>

                <H3>{context.user[0] ? getSuscriptionPlanFromObject(context.user[0]) : "No está suscrito"}</H3>
                
            </Div>  
        
    )
}
export default SuscriptionType;