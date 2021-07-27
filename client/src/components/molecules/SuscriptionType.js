import React, { useContext } from 'react'
import Div from '../atoms/Div'
import H3 from "../atoms/H3"
import H2 from "../atoms/H2"
import {ApiContext} from '../../context/ApiContext';
import getSuscriptionPlanFromObject from '../../utils/getSuscriptionPlanFromObject';
import { Link } from 'react-router-dom';



const SuscriptionType = (props) => {

        const context = useContext(ApiContext);

    



    return (
            <Link style={{textDecoration: 'none'}} to={"/suscripciones"}>
                <Div row spaceBet>
                    <H2>Tipo de Suscripción mi.Auriga:</H2>

                    <H3>{context.user ? getSuscriptionPlanFromObject(context.user) : "No está suscrito"}</H3>
                
                </Div>  
            </Link>
    )
}
export default SuscriptionType;