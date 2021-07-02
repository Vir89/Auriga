import React, {useContext} from 'react'
import Div  from '../atoms/Div'
import H2 from '../atoms/H2'
import { CarStatus } from '../molecules/CarStatus'
import { ApiContext } from '../../context/ApiContext';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


export const CarStatusContainer = () => {

    const context = useContext(ApiContext);
    /* console.log(context.user[0].cars[0].variableFeatures.generalStatus) */
   
    return (
        <Div column>   
            <H2>Estado general</H2>

            {/* <Accordion allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                         <AccordionItemButton>
                                Documentacion
                        </AccordionItemButton>
                    </AccordionItemHeading>
                 <AccordionItemPanel>

           
                {context.user[0].cars[0].variableFeatures.status.documentation.map((status, index)=>
                    <CarStatus
                    key = {index}
                    title = {status.title} 
                    status = {status.status}/>)}
                </AccordionItemPanel>
            </AccordionItem>
            </Accordion>  */}

            <Accordion allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                         <AccordionItemButton>
                                Exterior
                        </AccordionItemButton>
                    </AccordionItemHeading>
                 <AccordionItemPanel>

           
                {context.user[0].cars[0].variableFeatures.status.exterior.map((status, index)=>
                    <CarStatus
                    key = {index}
                    title = {status.title} 
                    status = {status.status}/>)}
                </AccordionItemPanel>
            </AccordionItem>
            </Accordion> 

            <Accordion allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                         <AccordionItemButton>
                                Neumáticos
                        </AccordionItemButton>
                    </AccordionItemHeading>
                 <AccordionItemPanel>

           
                {context.user[0].cars[0].variableFeatures.status.tires.map((status, index)=>
                    <CarStatus
                    key = {index}
                    title = {status.title} 
                    status = {status.status}/>)}
                </AccordionItemPanel>
            </AccordionItem>
            </Accordion> 

            <Accordion allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                         <AccordionItemButton>
                                Motor
                        </AccordionItemButton>
                    </AccordionItemHeading>
                 <AccordionItemPanel>

           
                {context.user[0].cars[0].variableFeatures.status.engine.map((status, index)=>
                    <CarStatus
                    key = {index}
                    title = {status.title} 
                    status = {status.status}/>)}
                </AccordionItemPanel>
            </AccordionItem>
            </Accordion> 

            <Accordion allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                         <AccordionItemButton>
                                Interior
                        </AccordionItemButton>
                    </AccordionItemHeading>
                 <AccordionItemPanel>

           
                {context.user[0].cars[0].variableFeatures.status.interior.map((status, index)=>
                    <CarStatus
                    key = {index}
                    title = {status.title} 
                    status = {status.status}/>)}
                </AccordionItemPanel>
            </AccordionItem>
            </Accordion> 

            <Accordion allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                         <AccordionItemButton>
                                Conducción
                        </AccordionItemButton>
                    </AccordionItemHeading>
                 <AccordionItemPanel>

           
                {context.user[0].cars[0].variableFeatures.status.driving.map((status, index)=>
                    <CarStatus
                    key = {index}
                    title = {status.title} 
                    status = {status.status}/>)}
                </AccordionItemPanel>
            </AccordionItem>
            </Accordion> 

            <Accordion allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                         <AccordionItemButton>
                                Otro
                        </AccordionItemButton>
                    </AccordionItemHeading>
                 <AccordionItemPanel>

           
                {context.user[0].cars[0].variableFeatures.status.other.map((status, index)=>
                    <CarStatus
                    key = {index}
                    title = {status.title} 
                    status = {status.status}/>)}
                </AccordionItemPanel>
            </AccordionItem>
            </Accordion> 

        
            
        </Div>
    )
}
