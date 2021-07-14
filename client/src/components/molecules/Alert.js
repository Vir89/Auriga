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
import P from '../atoms/P'
import H3 from '../atoms/H3'
import Span from '../atoms/Span'
import Div from '../atoms/Div';
import dayjs from 'dayjs'; 
import Img from '../atoms/Img';
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




const Alert = (props) => {
    const [isDisplaying, setIsDisplaying] = useState(false)

    const handleToggle =()=>{
        setIsDisplaying(!isDisplaying)

    }

    return (
        
            <Card alert onClick={handleToggle}>

                <Div column span><Span success={props.status==="success"? true: false} warning={props.status==="warning"? true: false} danger={props.status==="danger"? true: false}>{icons[selectIcon(props.title, props.type)] }</Span></Div>
                <Div column center padding>
                    
                  {/*  <H3 secondary>{props.dueDate && dayjs(props.dueDate).format('DD/MM/YYYY')}</H3> */} 
                    <H3>{props.type} / {props.title}</H3> 
                
                    {(isDisplaying && props.dueDate) && <P alertDescription> Fecha límite: {dayjs(props.dueDate).format('DD/MM/YYYY')}</P>}
                    {isDisplaying && (<P alertDescription>{props.description}</P>)}
                    {isDisplaying && (<Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9lsmUsiO6xeqX88YLXk3_FsOiLMmV3WnYA&usqp=CAU"></Img>)}
                    
                </Div>
                    
            </Card>
    )
}

export default Alert