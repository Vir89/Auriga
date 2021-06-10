import React from 'react'
import { DivAlert } from '../atoms/DivAlert'
import H3 from '../atoms/H3'
import Span from '../atoms/Span'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { IoAlertCircleSharp, IoDocumentText } from "react-icons/io5"; 
import P from '../atoms/P';
import { FaWrench } from "react-icons/fa";

const icons={
    danger: <IoAlertCircleSharp/>,
    repair:<FaWrench/>,
    yellow:<RiCheckboxBlankCircleFill/>,
    document:<IoDocumentText/>
}

export const Alert = ({alert}) => {
    return (
        <>
                <DivAlert >
                    <Span> {icons[alert.type]}  </Span>
                    <H3>{alert.name}</H3>
                    <P>{alert.fechaCaducidad}</P>

                </DivAlert>
        </>
        
    )
}
