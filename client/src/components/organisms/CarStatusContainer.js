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
import { nanoid } from 'nanoid';
import getColorAlertByStatus from '../../utils/getColorAlertByStatus';
import getColorAlertByDays from '../../utils/getColorAlertByDays';
import range from '../../data/range';
import getDaysLeft from '../../utils/getDaysLeft';




const CarStatusContainer = () => {

    const context = useContext(ApiContext);
    /* console.log(context.user[0].cars[0].variableFeatures.generalStatus) */

    
    const accordion={
    administration:context.carStatus[6],
    exterior:context.carStatus[1],
    tires:context.carStatus[3],
    engine:context.carStatus[5],
    interior:context.carStatus[0],
    driving:context.carStatus[2],
    other:context.carStatus[4],

    }
    
   
    return (
        <Div column>   
            <H2>Estado general</H2>

           <Accordion allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                         <AccordionItemButton>
                                Documentación
                        </AccordionItemButton>
                    </AccordionItemHeading>
                 <AccordionItemPanel>

           
                {context.carStatusLoaded && accordion.administration.map((item)=>
                    <CarStatus
                    key={nanoid()}
                    title = {item.title}
                    status={item.status}  
                   />)} 
                </AccordionItemPanel>
            </AccordionItem>
            </Accordion> 
            

            <Accordion allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                         <AccordionItemButton>
                                Exterior
                        </AccordionItemButton>
                    </AccordionItemHeading>
                 <AccordionItemPanel>

           
                {context.carStatusLoaded && accordion.exterior.map((item)=>
                    <CarStatus
                    key={nanoid()}
                    title = {item.title}
                    status={item.status}
                    
                    />)}
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

           
                {context.carStatusLoaded && accordion.tires.map((item)=>
                    <CarStatus
                    key={nanoid()}
                    title = {item.title}
                    status={item.status}
                    />)}
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

           
                {context.carStatusLoaded && accordion.engine.map((item)=>
                    <CarStatus
                    key={nanoid()}
                    title = {item.title}
                    status={item.status}
                   />)}
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

           
                {context.carStatusLoaded && accordion.interior.map((item)=>
                    <CarStatus
                    key={nanoid()}
                    title = {item.title}
                    status={item.status}
                   />)}
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

           
                {context.carStatusLoaded && accordion.driving.map((item)=>
                    <CarStatus
                    key={nanoid()}
                    title = {item.title}
                    status={item.status}
                   />)}
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

           
                {context.carStatusLoaded && accordion.other.map((item)=>
                    <CarStatus
                    key={nanoid()}
                    title = {item.title}
                    status={item.status}
                    />)}
                </AccordionItemPanel>
            </AccordionItem>
            </Accordion> 
 
        
            
        </Div>
    )
}

export default CarStatusContainer
