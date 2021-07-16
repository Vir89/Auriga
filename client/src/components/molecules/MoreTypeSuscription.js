import React, { useContext, useState } from 'react'
import {ApiContext} from '../../context/ApiContext';
import H3 from '../atoms/H3'
import H1 from '../atoms/H1'
import P from '../atoms/P'
import Div from '../atoms/Div';
import '../../App.css'
import Button from '../atoms/Button';
import H2 from "../atoms/H2"
import Section from "../atoms/Section"
import {IoMdCheckmarkCircleOutline} from "react-icons/io";
import {GiCheckMark} from "react-icons/gi"
import {IoIosAdd} from "react-icons/io"
import {VscCircleFilled} from "react-icons/vsc"





 
const MoreTypeSuscription = (props) => {

    const context = useContext(ApiContext);

 
    let miauriga = "basic"/*context.user[0].personalDetails.suscriptionPlan*/;


    const [isActive, setIsActive] = useState([
        {
          id: 0,
          visible: false,
          content: "Básico",
          price: "10€",
          quality: "Bueno",
          frequency: "Trimestral"
        },
        {
          id: 1,
          visible: false,
          content: "Estándar",
          price: "14€",
          quality: "Muy Bueno",
          frequency: "Bimestral"

        },
        {
          id: 2,
          visible: false,
          content: "Premium",
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
        console.log(id)
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
         <Div centerButton>
             <Button landButtonNoSuscrip onClick={() => clickHandler(isActive[1].id)}>No Tienes Plan Activado</Button>
        </Div>
         <Div centerButton effectSticky>
             <Button landButton value="0" visible={isActive[0].visible} onClick={(event) => clickHandler(event.target.value)}>{isActive[0].content} {miauriga == "basic" ? <IoMdCheckmarkCircleOutline/> : miauriga == "" ? "" : ""}</Button>
             <Button landButton value="1"visible={isActive[1].visible} onClick={(event) => clickHandler(event.target.value)}>{isActive[1].content} {miauriga == "estandar" ? <IoMdCheckmarkCircleOutline/> : miauriga == "" ? "" : ""}</Button>
             <Button landButton value="2"visible={isActive[2].visible} onClick={(event) => clickHandler(event.target.value)}>{isActive[2].content} {miauriga == "premium" ? <IoMdCheckmarkCircleOutline/> : miauriga == "" ? "" : ""}</Button>
        </Div>
         <P paragraphLanding>Precio al mes</P>
         <Div centerButton>
             <Button landButton landButtonSec visibleNo={isActive[0].visible}>{isActive[0].price}</Button>
             <Button landButton landButtonSec visibleNo={isActive[1].visible}>{isActive[1].price}</Button>
             <Button landButton landButtonSec visibleNo={isActive[2].visible}>{isActive[2].price}</Button></Div>

         <Div hr></Div>

         <P paragraphLanding>Visitas Auriga</P>
         <Div centerButton>
            <Button landButton visibleNo={isActive[0].visible} landButtonSec>{isActive[0].frequency}</Button>
            <Button landButton visibleNo={isActive[1].visible} landButtonSec>{isActive[1].frequency}</Button>
            <Button landButton visibleNo={isActive[2].visible} landButtonSec>{isActive[2].frequency}</Button></Div>

         <Div hr></Div>

         <P paragraphLanding>Calidad de limpieza</P>
         <Div centerButton>
            <Button landButton landButtonSec visibleNo={isActive[0].visible}>{isActive[0].quality}</Button>
            <Button landButton landButtonSec visibleNo={isActive[1].visible}>{isActive[1].quality}</Button>
            <Button landButton landButtonSec visibleNo={isActive[2].visible}>{isActive[2].quality}</Button></Div>

         <Div hr></Div>

         <P paragraphLanding>Gestion total de vehiculo</P>
         <Div centerButton>
            <Button landButton landButtonSec visibleNo={isActive[0].visible}><GiCheckMark/></Button>
            <Button landButton landButtonSec visibleNo={isActive[1].visible}><GiCheckMark/></Button>
            <Button landButton landButtonSec visibleNo={isActive[2].visible}><GiCheckMark/></Button></Div>

         <Div hr></Div>
        

    </Div>
  </Div>

        </Section>
    )
}
export default MoreTypeSuscription;