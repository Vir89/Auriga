import React, { useContext } from 'react'
import CardAlertContainer from '../atoms/CardAlertContainer'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { IoAlertCircleSharp, IoDocumentText } from "react-icons/io5"; 
import { FaWrench } from "react-icons/fa";
import H3 from '../atoms/H3'
import Span from '../atoms/Span'
import Button from '../atoms/Button';
import DivColumn from '../atoms/DivColumn';
import dayjs from 'dayjs';



const icons={
    danger: <DivColumn danger span><Span> <IoAlertCircleSharp/></Span></DivColumn>,
    Mantenimiento:<DivColumn danger span><Span> <FaWrench/></Span></DivColumn>,
    Aviso:<DivColumn warning span><Span> <RiCheckboxBlankCircleFill/></Span></DivColumn>,
    documentacion:<DivColumn success span><Span> <IoDocumentText/></Span></DivColumn>
   
}

export const Alert2 = ({alert}) => {



    return (
        
            <CardAlertContainer>

                {icons[alert.type]}  
                <DivColumn center padding>
                    
                    <H3 secondary >{dayjs(alert.dueDate).format('DD/MM/YYYY') }</H3>
                    <H3>{alert.name}</H3>
                    <Button >Mas Info</Button>
                </DivColumn>
                    
            </CardAlertContainer>
        
        





    )
}
