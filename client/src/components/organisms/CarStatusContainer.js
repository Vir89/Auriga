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
import '../../styles/accordion.css';
import { nanoid } from 'nanoid';



const CarStatusContainer = () => {

    const context = useContext(ApiContext);

    
    const accordion={
    administration:context.carStatus[0],
    exterior:context.carStatus[2],
    tires:context.carStatus[4],
    engine:context.carStatus[3],
    interior:context.carStatus[1],
    driving:context.carStatus[5],
    other:context.carStatus[6],

    }
    
   
    return (
        <Div acordeon>   
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
                    type ={item.type} 
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
                    type ={item.type} 
                    
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
                    type ={item.type} 
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
                    type ={item.type} 
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
                    type ={item.type} 
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
                    type ={item.type} 
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
                    type ={item.type} 
                    />)}
                </AccordionItemPanel>
            </AccordionItem>
            </Accordion> 
 
        
            
        </Div>
    )
}

export default CarStatusContainer;
