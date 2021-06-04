import React from 'react'
import { DivAlert } from '../atoms/DivAlert'
import P from '../atoms/P'
import Span from '../atoms/Span'
/* import { IoAlertCircleSharp } from "react-icons/io5"; */


export const AlertWarning = () => {
    return (
        <DivAlert>
            <Span>{/* <IoAlertCircleSharp/> */}</Span>
            <P>Vencimiento póliza de seguro</P>

        </DivAlert>
    )
}
