import React from 'react'
import { DivAlert } from '../atoms/DivAlert'
import H3 from '../atoms/H3'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import Span from '../atoms/Span';


const icons={
    ko: <Span danger><RiCheckboxBlankCircleFill/></Span>,
    ok:<Span success><RiCheckboxBlankCircleFill/></Span>,
    warning:<Span warning><RiCheckboxBlankCircleFill/></Span>
   
}
 
export const CarStatus = ({status}) => {
    return (
        <DivAlert >
            
            <H3>{status.name}</H3>
           
            {icons[status.status]} 

        </DivAlert>
    )
}
