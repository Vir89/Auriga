import React from 'react'
import CardAlertContainer from '../atoms/CardAlertContainer'
import SpanContainer from '../atoms/SpanContainer'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { IoAlertCircleSharp, IoDocumentText } from "react-icons/io5"; 
import P from '../atoms/P';
import { FaWrench } from "react-icons/fa";
import H3 from '../atoms/H3'
import Span from '../atoms/Span'
import { DivAlertInfo } from '../atoms/DivAlertInfo';
import DivRow from '../atoms/DivRow';
import Button from '../atoms/Button';
import DivColumn from '../atoms/DivColumn';

const icons={
    danger: <IoAlertCircleSharp/>,
    repair:<FaWrench/>,
    yellow:<RiCheckboxBlankCircleFill/>,
    document:<IoDocumentText/>
}

export const Alert2 = ({alert}) => {
    return (
        <div>
            <CardAlertContainer>

                

                <DivColumn span danger>
                    <Span> {icons[alert.type]}  </Span>
                    
                    
                </DivColumn>
                <DivColumn center padding>
                     <H3 secondary >{alert.fechaCaducidad}</H3>
                    <H3>{alert.name}</H3>
                    <Button >Mas Info</Button>
                </DivColumn>
                    
            </CardAlertContainer>
        
        </div>






    )
}
