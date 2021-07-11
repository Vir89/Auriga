import React, { useContext, useEffect } from 'react'
import Div from '../atoms/Div'
import H3 from "../atoms/H3"
import H2 from "../atoms/H2"
import {ApiContext} from '../../context/ApiContext';


const SuscriptionType = (props) => {
    console.log(props);
    let miauriga = "";
    
    useEffect(() => {
        miauriga = context.user[0].personalDetails.suscriptionPlan;

    },[]);
    //let miauriga = context.user[0].personalDetails.suscriptionPlan;


    const handleButtonSuscription = () => {
        console.log(props.history);
        props.history.push({
            pathname: "/suscripciones"
  
          }) 

    
        }
    
        const context = useContext(ApiContext);

    



    return (
            <Div row spaceBet onClick={handleButtonSuscription}>
                <H2>Tipo de Suscripción mi.Auriga:</H2>

                <H3>{miauriga == "basic" ? "mi.Auriga Básico" : miauriga == "estandar" ? "mi.Auriga Estándar": miauriga == "premium" ? "mi.Auriga Premium" : miauriga == "" ? "No está suscrito" : "No esta suscripto"}</H3>
                
            </Div>  
        
    )
}
export default SuscriptionType;