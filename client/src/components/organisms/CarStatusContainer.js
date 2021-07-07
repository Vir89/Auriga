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
    administration:context.user[0].cars[0].variableFeatures.status.administration,
    exterior:context.user[0].cars[0].variableFeatures.status.exterior,
    tires:context.user[0].cars[0].variableFeatures.status.tires,
    engine:context.user[0].cars[0].variableFeatures.status.engine,
    interior:context.user[0].cars[0].variableFeatures.status.interior,
    driving:context.user[0].cars[0].variableFeatures.status.driving,
    other:context.user[0].cars[0].variableFeatures.status.other

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

           
                {/* {context.usersLoaded && accordion.administration.map((status)=>
                    <CarStatus
                    key={nanoid()}
                    title = {status.title}
                    dueDate = {status.dueDate}
                    status={getColorAlertByDays( range[status.title][status.success], range[status.title][status.warning], status.dueDate)}  
                   />)} */}
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

           
                {accordion.exterior.map((status)=>
                    <CarStatus
                    key={nanoid()}
                    title = {status.title}
                    status={getColorAlertByStatus(status.isOk, status.isSerious)}
                    
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

           
                {accordion.tires.map((status)=>
                    <CarStatus
                    key={nanoid()}
                    title = {status.title}
                    status={getColorAlertByStatus( status.isOk, status.isSerious )}
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

           
                {accordion.engine.map((status)=>
                    <CarStatus
                    key={nanoid()}
                    title = {status.title}
                    status={getColorAlertByStatus( status.isOk, status.isSerious )}
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

           
                {accordion.interior.map((status)=>
                    <CarStatus
                    key={nanoid()}
                    title = {status.title}
                    status={getColorAlertByStatus( status.isOk, status.isSerious )}
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

           
                {accordion.driving.map((status)=>
                    <CarStatus
                    key={nanoid()}
                    title = {status.title}
                    status={getColorAlertByStatus( status.isOk, status.isSerious )}
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

           
                {accordion.other.map((status)=>
                    <CarStatus
                    key={nanoid()}
                    title = {status.title}
                    status={getColorAlertByStatus( status.isOk, status.isSerious )}
                    />)}
                </AccordionItemPanel>
            </AccordionItem>
            </Accordion> 

        
            
        </Div>
    )
}

export default CarStatusContainer
