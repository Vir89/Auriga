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

 
 


    return (
      <Accordion allowZeroExpanded>
      <AccordionItem>
          <AccordionItemHeading>
              <AccordionItemButton>
                  What harsh truths do you prefer to ignore?
              </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>

              <DivAlert >

                  <H3>{props.name}</H3>
                 {/* <H3>"{context.user.user[0].car[0].variableFeatures.generalStatus}"</H3> */}

                  {icons[props.status]} 



              </DivAlert>
          </AccordionItemPanel>
      </AccordionItem>

      </Accordion>
    )
}
