import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


const CarAccordion = (item) => {
    return (
        <Accordion allowZeroExpanded>
        <AccordionItem>
            <AccordionItemHeading>
                 <AccordionItemButton>
                {item[item]}
                </AccordionItemButton>
            </AccordionItemHeading>
         <AccordionItemPanel>
        {item}
        </AccordionItemPanel>
    </AccordionItem>
    </Accordion> 
    )
}

export default CarAccordion
