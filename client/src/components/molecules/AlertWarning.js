import React from 'react'
import { DivAlert } from '../atoms/DivAlert'
import P from '../atoms/P'
import Span from '../atoms/Span'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";




export const AlertWarning = () => {
    return (
        <DivAlert>
            
            <Span warning><RiCheckboxBlankCircleFill/> </Span>
            <P>Vencimiento póliza de seguro</P>

        </DivAlert>
    )
}
