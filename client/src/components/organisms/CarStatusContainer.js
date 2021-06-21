import React, {useContext} from 'react'
import DivColumn from '../atoms/DivColumn'
import H2 from '../atoms/H2'
import { CarStatus } from '../molecules/CarStatus'
import { ApiContext } from '../../context/ApiContext';


export const CarStatusContainer = () => {

    const context = useContext(ApiContext);
    /* console.log(context.user[0].cars[0].variableFeatures.generalStatus) */
   
    return (

        
        <DivColumn>
            
            <H2>Estado general</H2>

           
            {context.user[0].cars[0].variableFeatures.generalStatus.map((status, index)=>
                <CarStatus
                key = {index}
                name = {status.name} 
                status = {status.status}/>)}
            
        </DivColumn>
    )
}
