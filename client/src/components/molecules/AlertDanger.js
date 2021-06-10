import React from 'react'
import { DivAlert } from '../atoms/DivAlert'
import H3 from '../atoms/H3'
import Span from '../atoms/Span'
import { IoAlertCircleSharp } from "react-icons/io5"; 

export const AlertDanger = () => {
    return (
        <DivAlert danger>
            <Span danger><IoAlertCircleSharp/> </Span>
            <H3>Mantenimiento 30.000kms</H3>

        </DivAlert>
    )
}
