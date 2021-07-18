import React, { useContext, useState } from 'react'
import {ApiContext} from '../../context/ApiContext';
import H1 from '../atoms/H1'
import P from '../atoms/P'
import Div from '../atoms/Div';
import Button from '../atoms/Button';
import Section from "../atoms/Section"
import {GiCheckMark} from "react-icons/gi"
import {VscCircleFilled} from "react-icons/vsc"
import getSuscriptionShowPlansFromObject from '../../utils/getSuscriptionShowPlansFromObject';






 
const MoreTypeSuscription = (props) => {

  const context = useContext(ApiContext);

 
    const [isActive, setIsActive] = useState([
        {
          id: 0,
          visible: false,
          contentShow: "Básico",
          content: "basic",
          price: "10€",
          quality: "Bueno",
          frequency: "Trimestral"
        },
        {
          id: 1,
          visible: false,
          contentShow: "Estándar",
          content: "estandar",
          price: "14€",
          quality: "Muy Bueno",
          frequency: "Bimestral"

        },
        {
          id: 2,
          visible: false,
          contentShow: "Premium",
          content: "premium",
          price: "22€",
          quality: "Excelente",
          frequency: "Mensual"

        }
      ]);

          
    const [activeId, setActiveId] = useState(undefined);

    const clickHandler = (id) => {
        const newIsActive = isActive;
        newIsActive.forEach((el) => (el.visible = false));
        newIsActive[id].visible = true;
        setIsActive(newIsActive);
        setActiveId(id);
      };


    return (
      <Section>

        <Div centerBodyLandingPage>

          <H1>Suscripciones</H1>
          <Div descripFrequencyVisits>
            <p>Selecciona el plan ideal para ti</p>
          </Div>

            <Div centerDescripLanding>
              <ul>
                <li><VscCircleFilled/> Todos los aspectos de tu coche bajo control</li>
                <li><VscCircleFilled/> Elige según tus necesidades de limpieza</li>
                <li><VscCircleFilled/> Cambia de plan o cancela cuando quieras</li>
              </ul>

              {context.usersLoaded && 
                <Div centerButton>
                  <Button landButtonNoSuscrip 
                    style={context.user[0].personalDetails.suscriptionPlan === "" ? 
                      {display: getSuscriptionShowPlansFromObject(context.user[0].personalDetails.suscriptionPlan)} : {display:"none"}}>
                      
                      No Tienes Plan Activado
                  
                  </Button>
                
                </Div>}

              {context.usersLoaded && 
                <Div centerButton effectSticky>
                    {isActive.map((elem, index)=> 
                      
                      <Button landButton
                        key={index}  
                        value={index} 
                        visible={isActive[index].visible} onClick={(event) => clickHandler(event.target.value)}>
                          
                          {isActive[index].contentShow}
                          {context.user[0].personalDetails.suscriptionPlan === isActive[index].content ? 
                            getSuscriptionShowPlansFromObject(context.user[0].personalDetails.suscriptionPlan) : "" }
                      
                      </Button>)
                    }

                </Div>}

              <P paragraphLanding>Precio al mes</P>

              <Div centerButton>
                {isActive.map((elem, index) => 
                  <Button landButton landButtonSec 
                    key={index}
                    visibleNo={isActive[index].visible}>
                      
                      {isActive[index].price}
                      
                  </Button>)
                }

              </Div>

              <Div hr></Div>
               
              <P paragraphLanding>Visitas Auriga</P>

              <Div centerButton>
                {isActive.map((elem, index) => 
                  <Button landButton landButtonSec
                    key={index}  
                    visibleNo={isActive[index].visible} >

                    {isActive[index].frequency}
                    
                  </Button>)
                }

              </Div>

              <Div hr></Div>
              
              <P paragraphLanding>Calidad de limpieza</P>

              <Div centerButton>
                {isActive.map((elem, index) => 
                  <Button landButton landButtonSec
                    key={index}  
                    visibleNo={isActive[index].visible}>
                      
                      {isActive[index].quality}
                      
                  </Button>)
                }

              </Div>

              <Div hr></Div>
              
              <P paragraphLanding>Gestion total de vehiculo</P>

              <Div centerButton>
                {isActive.map((elem, index) => 
                  <Button landButton landButtonSec
                    key={index}  
                    visibleNo={isActive[index].visible}>

                      <GiCheckMark/>

                  </Button>)
                }

              </Div>

              <Div hr></Div>
              
              
            </Div>
        </Div>
              
      </Section>
    )
}   
export default MoreTypeSuscription;