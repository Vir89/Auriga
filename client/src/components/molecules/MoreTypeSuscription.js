import React, { useContext, useEffect } from 'react'
import {ApiContext} from '../../context/ApiContext';
import H3 from '../atoms/H3'
import Div from '../atoms/Div';
import '../../App.css'
import Button from '../atoms/Button';
import H2 from "../atoms/H2"
import Section from "../atoms/Section"
import {TiTick} from "react-icons/ti";
import {IoCalendarOutline} from "react-icons/io5"


 
const MoreTypeSuscription = (props) => {

    const context = useContext(ApiContext);

    console.log(props);
 
    let miauriga = "basic"/*context.user[0].personalDetails.suscriptionPlan*/;


    return (
        <Section>
            
            <Div containerTypeServices /*id="courses-container"*/>
                <Div suscriCard /*className={miauriga == "basic" ? "course-alt" : miauriga == "" ? "course" : "course"}*/>
                    <Div levelSubscription /*className="level-course"*/>
                        <H2>mi.Auriga Básico</H2>
                    </Div>



                    <Div  descripFrequency /*className="description-course-wrapper"*/>
                        <Div listDescripSuscriCard /*className="list-description"*/>
                            <Div descripFrequencyVisits /*className="element-description"*/>
                                <p><IoCalendarOutline/> Visita cada trimestre (4 al año)</p>
                            </Div>
            

                        </Div>
                    </Div>
                    <Button main mainSuscri type="button" /*class={ miauriga == "basico" ? "btn-box" : "btn-boxus"}*/>
                        {miauriga == "basic" ? "Suscrito en este servicio" : miauriga == "" ? "Suscribirme" : "Cambiar de suscripción"}
                    </Button>


                    <Div listDescripSuscriCard /*className="list-description"*/>
                        <Div listDescriptionInfo /*className="description-info"*/>
                            <H3 black><TiTick/>Lavado Básico Plus(interior y exterior).<br/></H3>
                            <H3 black><TiTick/>Mantenimiento.<br/></H3>
                            <H3 black><TiTick/>Neumáticos y Revisión anual.<br/></H3>
                            <H3 black><TiTick/>Reparaciones.<br/></H3>
                            <H3 black><TiTick/>ITV.<br/></H3>
                            <H3 black><TiTick/>Seguros y Multas.<br/></H3>
                            <H3 black><TiTick/>Valor mercado ocasión.<br/></H3>
                            <H3 black><TiTick/>Precio carburante.<br/></H3>
                      </Div>


                    </Div>
                </Div>
                <Div suscriCard/*className={miauriga == "estandar" ? "course-alt" : miauriga == "" ? "course" : "course"}*/>
                    <Div levelSubscription /*className="level-course"*/>
                        <H2>mi.Auriga Estándar</H2>
                    </Div>
                  
                  

                    <Div descripFrequency /*className="description-course-wrapper"*/>
                        <Div listDescripSuscriCard /*className="list-description"*/>
                            <Div descripFrequencyVisits /*className="element-description"*/>
                                <p><IoCalendarOutline/> Visita meses alternos (6 al año)</p>
                            </Div>
                        </Div>
                    </Div>
                    <Button main mainSuscri type="button" /*class={ miauriga == "estandar" ? "btn-box" : "btn-boxus"}*/>
                        {miauriga == "estandar" ? "Suscrito en este servicio" : miauriga == "" ? "Suscribirme" : "Cambiar de suscripción"}
                    </Button>


                    <Div listDescripSuscriCard /*className="list-description"*/>
                        <Div listDescriptionInfo /*className="description-info"*/>
                            <H3 black><TiTick/>Lavado Básico Plus(interior y exterior).<br/></H3>
                            <H3 black><TiTick/>Mantenimiento.<br/></H3>
                            <H3 black><TiTick/>Neumáticos y Revisión anual.<br/></H3>
                            <H3 black><TiTick/>Reparaciones.<br/></H3>
                            <H3 black><TiTick/>ITV.<br/></H3>
                            <H3 black><TiTick/>Seguros y Multas.<br/></H3>
                            <H3 black><TiTick/>Valor mercado ocasión.<br/></H3>
                            <H3 black><TiTick/>Precio carburante.<br/></H3>
                        </Div>


                    </Div>
                </Div>
                <Div suscriCard/*className={miauriga == "premium" ? "course-alt" : miauriga == "" ? "course" : "course"}*/>
                    <Div levelSubscription /*className="level-course"*/>
                        <H2>mi.Auriga Premium</H2>
                    </Div>
                  
                  

                    <Div descripFrequency /*className="description-course-wrapper"*/>
                        <Div listDescripSuscriCard /*className="list-description"*/>
                            <Div descripFrequencyVisits /*className="element-description"*/>
                                <p><IoCalendarOutline/> Visita todos los meses (12 al año)</p>
                            </Div>
                        </Div>
                    </Div>
                    <Button main mainSuscri type="button" /*class={ miauriga == "premium" ? "btn-box" : "btn-boxus"}*/>
                        {miauriga == "premium" ? "Suscrito en este servicio" : miauriga == "" ? "Suscribirme" : "Cambiar de suscripción"}
                    </Button>


                    <Div listDescripSuscriCard /*className="list-description"*/>
                        <Div listDescriptionInfo /*className="description-info"*/>
                            <H3 black><TiTick/>Lavado Básico Plus(interior y exterior).</H3>
                            <H3 black><TiTick/>Mantenimiento.</H3>
                            <H3 black><TiTick/>Neumáticos y Revisión anual.</H3>
                            <H3 black><TiTick/>Reparaciones.<br/></H3>
                            <H3 black><TiTick/>ITV.</H3>
                            <H3 black><TiTick/>Seguros y Multas.</H3>
                            <H3 black><TiTick/>Valor mercado ocasión.</H3>
                            <H3 black><TiTick/>Precio carburante.</H3>
                        </Div>
                

                    </Div>
                </Div>
            </Div>

        </Section>
    )
}
export default MoreTypeSuscription;