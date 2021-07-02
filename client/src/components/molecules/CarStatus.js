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
 
export const CarStatus = (props) => {


    return (

              <Div alert >
                  <H3>{props.title}</H3>
                  {icons[props.status]} 
              </Div>
        
    )
}
