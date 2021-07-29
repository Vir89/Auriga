import React, { useContext, useState } from "react";
import { ApiContext } from "../../context/ApiContext";
import { nanoid } from "nanoid";
import H1 from "../atoms/H1";
import H2 from "../atoms/H2";
import P from "../atoms/P";
import Div from "../atoms/Div";
import Button from "../atoms/Button";
import Section from "../atoms/Section";
import { ImCheckmark } from "react-icons/im";
import { VscCircleFilled } from "react-icons/vsc";
import getSuscriptionShowPlansFromObject from "../../utils/getSuscriptionShowPlansFromObject";
import plansData from "../../data/plansData";
import {IoMdCheckmarkCircleOutline} from "react-icons/io";

const MoreTypeSuscription = () => {
    const context = useContext(ApiContext);

    const [activePlanIndex, setActivePlanIndex] = useState(null);

    const handleClickPlan = (index) => {
        setActivePlanIndex(parseInt(index));
    };

    return (
        <Section>
            <Div centerBodyLandingPage>
                <H1 suscription>Suscripciones</H1>              
                    <H2 suscription>Selecciona el plan ideal para ti</H2>
             </Div>   
                <Div centerDescripLanding>
                    <ul>
                        <li>
                            <IoMdCheckmarkCircleOutline/> Todos los aspectos de tu coche
                            bajo control
                        </li>
                        <li>
                            <IoMdCheckmarkCircleOutline/> Elige según tus necesidades de
                            limpieza
                        </li>
                        <li>
                            <IoMdCheckmarkCircleOutline/> Cambia de plan o cancela cuando
                            quieras
                        </li>
                    </ul>
                  </Div>
                    <Div centerBodyLandingPage>
                    {context.usersLoaded && (
                        <Div centerButton>
                            <Button
                                landButtonNoSuscrip
                                style={context.user.personalDetails.suscriptionPlan === ""
                                        ?   {
                                              display: getSuscriptionShowPlansFromObject(context.user.personalDetails.suscriptionPlan),
                                            }
                                        :   { 
                                            display: "none" 
                                            }
                                }
                            >
                                No Tienes Plan Activado
                            </Button>
                        </Div>
                    )}

                    {context.usersLoaded && (
                        <Div centerButton effectSticky>
                            {plansData.map((plan, index) => (
                                <Button
                                    landButton
                                    key={nanoid()}
                                    value={index}
                                    visible={index === activePlanIndex}
                                    onClick={(event) => handleClickPlan(event.target.value)}
                                >
                                    {plan.contentShow}
                                    {context.user.personalDetails.suscriptionPlan === plan.content &&
                                        getSuscriptionShowPlansFromObject(context.user.personalDetails.suscriptionPlan)}
                                </Button>
                            ))}
                        </Div>
                    )}

                    <P paragraphLanding>Precio al mes</P>

                    <Div centerButton>
                        {plansData.map((plan, index) => (
                            <Button
                                landButton
                                landButtonSec
                                key={nanoid()}
                                visibleNo={index === activePlanIndex}
                            >
                                {plan.price}
                            </Button>
                        ))}
                    </Div>

                    <Div hr></Div>

                    <P paragraphLanding>Visitas Auriga</P>

                    <Div centerButton>
                        {plansData.map((plan, index) => (
                            <Button
                                landButton
                                landButtonSec
                                key={nanoid()}
                                visibleNo={index === activePlanIndex}
                            >
                                {plan.frequency}
                            </Button>
                        ))}
                    </Div>

                    <Div hr></Div>

                    <P paragraphLanding>Calidad de limpieza</P>

                    <Div centerButton>
                        {plansData.map((plan, index) => (
                            <Button
                                landButton
                                landButtonSec
                                key={nanoid()}
                                visibleNo={index === activePlanIndex}
                            >
                                {plan.quality}
                            </Button>
                        ))}
                    </Div>

                    <Div hr></Div>

                    <P paragraphLanding>Gestion total de vehiculo</P>

                    <Div centerButton>
                        <Button
                            landButton
                            landButtonSec
                            visibleNo={0 === activePlanIndex}
                        >
                            <ImCheckmark />
                        </Button>
                        <Button
                            landButton
                            landButtonSec
                            visibleNo={1 === activePlanIndex}
                        >
                            <ImCheckmark />
                        </Button>
                        <Button
                            landButton
                            landButtonSec
                            visibleNo={2 === activePlanIndex}
                        >
                            <ImCheckmark />
                        </Button>
                    </Div>

                    <Div hr></Div>
                </Div>
        </Section>
    );
};
export default MoreTypeSuscription;