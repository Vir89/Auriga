import React, {useState} from 'react'
import Card from '../atoms/Card'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { IoAlertCircleSharp, IoDocumentText } from "react-icons/io5"; 
import { GiCarWheel } from "react-icons/gi";
import { FaWrench } from "react-icons/fa";
import { AiFillCar, AiFillSetting } from "react-icons/ai";
import { MdLocalCarWash } from "react-icons/md";
import { FaOilCan } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { FaThermometerEmpty } from "react-icons/fa";
import P from '../atoms/P';
import PAccord from '../atoms/PAccord'

import H3 from '../atoms/H3'
import Span from '../atoms/Span'
import Div from '../atoms/Div';
import dayjs from 'dayjs'; 
import selectIcon from '../../utils/selectIcon';
import ImgAccordeon from '../atoms/ImgAccordeon';

const icons = {
    Administración:<IoDocumentText/>,
    Ruedas:  <GiCarWheel/>,
    Exterior:<AiFillCar/>,
    Interior:<AiFillCar/>,
    Motor:<AiFillSetting/>,
    Conducción:<GiSteeringWheel/>,
    Limpieza:<MdLocalCarWash/>,
    danger: <IoAlertCircleSharp/>,
    repair: <FaWrench/>,
    Aviso: <RiCheckboxBlankCircleFill/>,
    oil:<FaOilCan/>,
    liquid:<FaThermometerEmpty/>
}




const Alert = (props) => {
    const [isDisplaying, setIsDisplaying] = useState(false)

    const handleToggle =()=>{
        setIsDisplaying(!isDisplaying)

    }

    return (
        
            <Card onClick={handleToggle} warning={props.status==="warning"? true: false} danger={props.status==="danger"? true: false}>

                <Div column span><Span success={props.status==="success"? true: false} warning={props.status==="warning"? true: false} danger={props.status==="danger"? true: false}>{icons[selectIcon(props.title, props.type)] }</Span></Div>
                <Div column left padding>
                    
                  {/*  <H3 secondary>{props.dueDate && dayjs(props.dueDate).format('DD/MM/YYYY')}</H3> */} 
                    <H3>{props.type} / {props.title}</H3> 
                
                    <PAccord isDisplaying ={isDisplaying && props.dueDate} alertDescription> Fecha límite: {dayjs(props.dueDate).format('DD/MM/YYYY')}</PAccord>
                   <PAccord isDisplaying ={isDisplaying} alertDescription>{props.description}</PAccord>
                     <ImgAccordeon isDisplaying ={isDisplaying} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9lsmUsiO6xeqX88YLXk3_FsOiLMmV3WnYA&usqp=CAU"></ImgAccordeon>
                    
                </Div>
                    
            </Card>
    )
}

export default Alert
