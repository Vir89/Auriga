import React, { useContext } from 'react'
import H3 from '../atoms/H3'
import '../../App.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Section from "../atoms/Section"
import {ApiContext} from '../../context/ApiContext';




 
const MoreTypeSuscription = (props) => {
    const context = useContext(ApiContext);

    console.log(props);

 


    return (
        <Section>
      <Accordion allowZeroExpanded>
      <AccordionItem>
          <AccordionItemHeading>
              <AccordionItemButton>
                  miAuriga Básico
              </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
              <H3>Visita cada trimestre</H3>
              <p>
                        Lavado Básico Plus(interior y exterior).<br/>
                        Manteniemiento.<br/>
                        Neumaticos y Revision anual.<br/>
                        Reparaciones.<br/>
                        ITV.<br/>
                        Seguros y Multas.<br/>
                        Valor mercado ocasion.<br/>
                        Precio carburante.<br/>
              </p>
          </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
          <AccordionItemHeading>
              <AccordionItemButton>
                  miAuriga Estandar
              </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
              <H3>Visita meses alternos</H3>
              <p>
                        Lavado Básico Plus(interior y exterior).<br/>
                        Manteniemiento.<br/>
                        Neumaticos y Revision anual.<br/>
                        Reparaciones.<br/>
                        ITV.<br/>
                        Seguros y Multas.<br/>
                        Valor mercado ocasion.<br/>
                        Precio carburante.<br/>
              </p>
          </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
          <AccordionItemHeading>
              <AccordionItemButton>
                  miAuriga Básico
              </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
              <H3>Visita todos los meses</H3>
              <p>
                        Lavado Básico Plus(interior y exterior).<br/>
                        Manteniemiento.<br/>
                        Neumaticos y Revision anual.<br/>
                        Reparaciones.<br/>
                        ITV.<br/>
                        Seguros y Multas.<br/>
                        Valor mercado ocasion.<br/>
                        Precio carburante.<br/>
              </p>
          </AccordionItemPanel>
      </AccordionItem>

      </Accordion>
      </Section>
    )
}
export default MoreTypeSuscription;