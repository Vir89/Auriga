import React, { useContext } from 'react'
import Card from '../atoms/Card'
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
    danger: <IoAlertCircleSharp/>,
    repair: <FaWrench/>,
    Aviso: <RiCheckboxBlankCircleFill/>,
    administration:<IoDocumentText/>,
    tires:  <GiCarWheel/>,
    exterior:<AiFillCar/>,
    interior:<MdLocalCarWash/>,
    engine:<AiFillSetting/>
}

const Alert = (props) => {

    return (
        
            <Card alert>

                <Div column success={props.status=="success"? true: false} warning={props.status=="warning"? true: false} danger={props.status=="danger"? true: false} span><Span>{icons[props.type]}</Span></Div>
                <Div column center padding>
                    
                   <H3 secondary>{props.dueDate && dayjs(props.dueDate).format('DD/MM/YYYY')}</H3> 
                    <H3>{props.title}</H3>
                    <P>{props.alert}</P>
                    <Button >Mas Info</Button>
                </Div>
                    
            </Card>
    )
}

export default Alert