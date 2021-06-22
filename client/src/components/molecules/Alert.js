import React, {Fragment} from 'react'
import { DivAlert } from '../atoms/DivAlert'
import H3 from '../atoms/H3'
import Span from '../atoms/Span'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { IoAlertCircleSharp, IoDocumentText } from "react-icons/io5"; 
import P from '../atoms/P';
import { FaWrench } from "react-icons/fa";
import dayjs from 'dayjs';


const icons={
    danger: <IoAlertCircleSharp/>,
    Mantenimiento:<FaWrench/>,
    Aviso:<RiCheckboxBlankCircleFill/>,
    documentacion:<IoDocumentText/>
}

export const Alert = ({alert}) => {
    return (
        <Fragment>
                <DivAlert >
                    <Span> {icons[alert.type]}  </Span>
                    <H3>{alert.name}</H3>
                    <P>{dayjs(alert.dueDate).format('DD/MM/YYYY') }</P>

                </DivAlert>
        </Fragment>
        
    )
}
