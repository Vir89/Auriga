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
import Span from '../atoms/Span'
import selectIcon from '../../utils/selectIcon';


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


const SpanIconStatus = (props) => {
    return ( 
        <Span success={props.status==="success"? true: false} warning={props.status==="warning"? true: false} danger={props.status==="danger"? true: false}>{icons[selectIcon(props.title, props.type)] }</Span>

     );
}
 
export default SpanIconStatus;