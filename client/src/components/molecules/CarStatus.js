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

/* const color={
    if (isOk){
        return <Span success><RiCheckboxBlankCircleFill/></Span>,
    }else if(isSerious){
       return <Span danger><RiCheckboxBlankCircleFill/></Span>,

    }else{
        return warning:<Span warning><RiCheckboxBlankCircleFill/></Span>
    }
}
  */
export const CarStatus = (props) => {
console.log(props.title)
console.log(props.isOk)
console.log(props.isSerious)

    return (

              <Div alert >
                  <H3>{props.title}</H3>
                  <H3>{props.dueDate}</H3>
                  {/* {props.isOK ? <Span success><RiCheckboxBlankCircleFill/></Span>:props.isSerious ?<Span danger><RiCheckboxBlankCircleFill/></Span>:<Span warning><RiCheckboxBlankCircleFill/></Span>}  */}
                  {props.isOK ? <Span success><RiCheckboxBlankCircleFill/></Span> : <Span warning><RiCheckboxBlankCircleFill/></Span>} 
              </Div>
        
    )
}
