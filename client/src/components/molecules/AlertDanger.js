import React from 'react'
import { DivAlert } from '../atoms/DivAlert'
import P from '../atoms/P'
import Span from '../atoms/Span'
import { IoAlertCircleSharp } from "react-icons/io5"; 

export const AlertDanger = () => {
    return (
        <DivAlert>
            <Span danger><IoAlertCircleSharp/> </Span>
            <P>Mantenimiento 30.000kms</P>

        </DivAlert>
    )
}
