import React from 'react'
import Div from '../atoms/Div'
import H3 from '../atoms/H3'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import Span from '../atoms/Span';
import '../../App.css';
import 'react-accessible-accordion/dist/fancy-example.css';



const icons={
    ko: <Span danger><RiCheckboxBlankCircleFill/></Span>,
    ok:<Span success><RiCheckboxBlankCircleFill/></Span>,
    warning:<Span warning><RiCheckboxBlankCircleFill/></Span>
   
}
/* 
const seguro={
    if (dueDateSeguro>3){
        return success
    }else if(dueDateSeguro<3 && dueDateSeguro>2){
        return warning

    }else{
        return danger
    }
    
}
const itv={
    if (dueDateitv>2){
        return success
    }else if(dueDateitv<2 && dueDateitv>1){
        return warning

    }else{
        return danger
    }
    
}
const mantenimiento={
    if (dueDatemantenimiento>2){
        return success
    }else if(dueDatemantenimiento<2 && dueDatemantenimiento>1){
        return warning

    }else{
        return danger
    }
    
}
const matriculacion={
    if (dueDatematriculacion>2){
        return success
    }else if(dueDatematriculacion<2 && dueDatematriculacion>1){
        return warning

    }else{
        return danger
    }
    
} */

const CarStatusAdministration = (props) => {


    return (

              <Div alert >
                  <H3>{props.title}</H3>
                  <H3>{props.dueDate}</H3>
                  {icons[props.status]} 

              </Div>
        
    )
}

export default CarStatusAdministration