import React, {useState} from 'react'
import Card from '../atoms/Card'
import PAccord from '../atoms/PAccord'
import H3 from '../atoms/H3'
import Div from '../atoms/Div';
import dayjs from 'dayjs'; 
import ImgAccordeon from '../atoms/ImgAccordeon';
import SpanIconStatus from './SpanIconStatus';


const Alert = (props) => {
    const [isDisplaying, setIsDisplaying] = useState(false)

    const handleToggle =()=>{
        setIsDisplaying(!isDisplaying)

    }

    return (
        
            <Card onClick={handleToggle} warning={props.status==="warning"? true: false} danger={props.status==="danger"? true: false}>

                <Div column span>
                    <SpanIconStatus status={props.status} title={props.title} type={props.type}/>
                </Div>

                <Div column left padding>
                
                    <H3>{props.type} / {props.title}</H3> 
                
                    <PAccord isDisplaying ={isDisplaying && props.dueDate} alertDescription> Fecha límite: {dayjs(props.dueDate).format('DD/MM/YYYY')}</PAccord>
                    <PAccord isDisplaying ={isDisplaying} alertDescription>{props.description}</PAccord>
                    <ImgAccordeon isDisplaying ={isDisplaying} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9lsmUsiO6xeqX88YLXk3_FsOiLMmV3WnYA&usqp=CAU"></ImgAccordeon>
                    
                </Div>
                    
            </Card>
    )
}

export default Alert
