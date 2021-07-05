import React from 'react'
import Div from '../atoms/Div'
import H3 from '../atoms/H3'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import Span from '../atoms/Span';




export const CarStatus = (props) => {


    return (

              <Div alert >
                  <H3>{props.title}</H3>
                  <H3>{props.dueDate}</H3>
                  <Span success={props.status=="success"? true: false} warning={props.status=="warning"? true: false} danger={props.status=="danger"? true: false}><RiCheckboxBlankCircleFill/></Span>
              </Div>
        
    )
}
