import React, { useContext } from 'react'
import Div from '../atoms/Div'
import H3 from "../atoms/H3"
import H2 from "../atoms/H2"
import {ApiContext} from '../../context/ApiContext';


const SuscriptionType = (props) => {
    console.log(props);

    const handleButtonSuscription = () => {
        console.log(props.history);
        props.history.push({
            pathname: "/suscripciones"
  
          }) 

    
        }
    
        const context = useContext(ApiContext);

    



    return (
            <Div row spaceBet>
                <H2>Tipo de Suscripción mi.Auriga:</H2>
                <button onClick={handleButtonSuscription}>suscripcion</button>

                <H3>mi.Auriga Estándar</H3>
                
            </Div>  
        
    )
}
export default SuscriptionType;