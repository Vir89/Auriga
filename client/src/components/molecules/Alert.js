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
import Div from '../atoms/Div';
import dayjs from 'dayjs';



const icons={
    danger: <Div column danger span><Span> <IoAlertCircleSharp/></Span></Div>,
    repair:<Div column danger span><Span> <FaWrench/></Span></Div>,
    Aviso:<Div column warning span><Span> <RiCheckboxBlankCircleFill/></Span></Div>,
    administration:<Div column warning span><Span> <IoDocumentText/></Span></Div>,
    tires: <Div column warning span><Span> <GiCarWheel/></Span></Div>, 
    exterior:<Div column success span><Span> <AiFillCar/></Span></Div>,
    interior:<Div column success span><Span> <MdLocalCarWash/></Span></Div>,
    engine:<Div column warning span><Span> <AiFillSetting/></Span></Div>
}

const Alert = ({alert}) => {



    return (
        
            <CardAlertContainer>

                {icons[alert.type]}  
                <Div column center padding>
                    
                    <H3 secondary>{dayjs(alert.dueDate).format('DD/MM/YYYY')}</H3>
                    <H3>{alert.title}</H3>
                    <P>{alert.alert}</P>
                    <Button >Mas Info</Button>
                </Div>
                    
            </CardAlertContainer>
    )
}

export default Alert