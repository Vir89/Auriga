import React, { useContext } from 'react'
import { textData } from '../../data/textData'
import DivRow from '../atoms/DivRow'
import H3 from "../atoms/H3"
import H2 from "../atoms/H2"
import DivColumn from '../atoms/DivColumn'
import {ApiContext} from '../../context/ApiContext';


const SuscriptionType = (props) => {
    console.log(props);

    const handleButtonSuscription = (props) => {
        console.log(props.history);
        props.history.push({
            pathname: "/suscripciones"
  
          }) 

    
        }
    
        const context = useContext(ApiContext);

    



    return (
            <DivRow spaceBet>
                <H2>Tipo de Suscripción mi.Auriga:</H2>
                <button onClick={handleButtonSuscription}>suscripcion</button>

                <H3>mi.Auriga Estándar</H3>
                
            </DivRow >  
        
    )
}
export default SuscriptionType;