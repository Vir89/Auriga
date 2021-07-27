import React from 'react'
import Div from '../atoms/Div'
import H3 from '../atoms/H3'
import SpanIconStatus from './SpanIconStatus';


export const CarStatus = (props) => {


    return (

              <Div alert >
                  <H3>{props.title}</H3>
                  <SpanIconStatus status={props.status} title={props.title} type={props.type}/>
              </Div>
        
    )
}
