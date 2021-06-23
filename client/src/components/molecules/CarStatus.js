import React from 'react'
import { DivAlert } from '../atoms/DivAlert'
import H3 from '../atoms/H3'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import Span from '../atoms/Span';
import '../../App.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';



const icons={
    ko: <Span danger><RiCheckboxBlankCircleFill/></Span>,
    ok:<Span success><RiCheckboxBlankCircleFill/></Span>,
    warning:<Span warning><RiCheckboxBlankCircleFill/></Span>
   
}
 
export const CarStatus = (props) => {

 
    /* <Accordion allowZeroExpanded>
    <AccordionItem>
        <AccordionItemHeading>
            <AccordionItemButton>
                {props.name}
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>

            <DivAlert 

            </DivAlert>
        </AccordionItemPanel>
    </AccordionItem>

    </Accordion> */


    return (
      

              <DivAlert >

                  <H3>{props.name}</H3>
                 {/* <H3>"{context.user.user[0].car[0].variableFeatures.generalStatus}"</H3> */}

                  {icons[props.status]} 



              </DivAlert>
        
    )
}
