import React, { useContext } from 'react'
import CardAlertContainer from '../atoms/CardAlertContainer'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { IoAlertCircleSharp, IoDocumentText } from "react-icons/io5"; 
import { GiCarWheel } from "react-icons/gi";
import { FaWrench } from "react-icons/fa";
import { AiFillCar, AiFillSetting } from "react-icons/ai";
import { MdLocalCarWash } from "react-icons/md";
import P from '../atoms/P'
import H3 from '../atoms/H3'
import Span from '../atoms/Span'
import Button from '../atoms/Button';
import DivColumn from '../atoms/DivColumn';
import dayjs from 'dayjs';



const icons={
    danger: <DivColumn danger span><Span> <IoAlertCircleSharp/></Span></DivColumn>,
    repair:<DivColumn danger span><Span> <FaWrench/></Span></DivColumn>,
    Aviso:<DivColumn warning span><Span> <RiCheckboxBlankCircleFill/></Span></DivColumn>,
    administration:<DivColumn warning span><Span> <IoDocumentText/></Span></DivColumn>,
    tires: <DivColumn warning span><Span> <GiCarWheel/></Span></DivColumn>, 
    exterior:<DivColumn success span><Span> <AiFillCar/></Span></DivColumn>,
    interior:<DivColumn success span><Span> <MdLocalCarWash/></Span></DivColumn>,
    engine:<DivColumn warning span><Span> <AiFillSetting/></Span></DivColumn>
}

export const Alert2 = ({alert}) => {



    return (
        
            <CardAlertContainer>

                {icons[alert.type]}  
                <DivColumn center padding>
                    
                    <H3 secondary>{dayjs(alert.dueDate).format('DD/MM/YYYY')}</H3>
                    <H3>{alert.title}</H3>
                    <P>{alert.alert}</P>
                    <Button >Mas Info</Button>
                </DivColumn>
                    
            </CardAlertContainer>
    )
}
