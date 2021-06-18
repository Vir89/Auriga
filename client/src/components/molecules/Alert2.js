import React, { useContext } from 'react'
import CardAlertContainer from '../atoms/CardAlertContainer'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { IoAlertCircleSharp, IoDocumentText } from "react-icons/io5"; 
import P from '../atoms/P';
import { FaWrench } from "react-icons/fa";
import H3 from '../atoms/H3'
import Span from '../atoms/Span'
import Button from '../atoms/Button';
import DivColumn from '../atoms/DivColumn';
import { ApiContext } from '../../context/ApiContext';





const icons={
    danger: <DivColumn danger span><Span> <IoAlertCircleSharp/></Span></DivColumn>,
    repair:<DivColumn warning span><Span> <FaWrench/></Span></DivColumn>,
    yellow:<DivColumn ><Span> <RiCheckboxBlankCircleFill/></Span></DivColumn>,
    document:<DivColumn success span><Span> <IoDocumentText/></Span></DivColumn>
}

export const Alert2 = ({alert}) => {

    const context = useContext(ApiContext);
    console.log(context.user)





    return (
        
            <CardAlertContainer>

                

                {icons[alert.type]}  
                <DivColumn center padding>
                    
                     <H3 secondary >{alert.fechaCaducidad}</H3>
                    <H3>{alert.name}</H3>
                    <Button >Mas Info</Button>
                </DivColumn>
                    
            </CardAlertContainer>
        
        





    )
}
