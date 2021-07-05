import React, {useContext, useEffect, useState} from 'react'
import {newArrayFromState} from '../../utils/newArrayFromState'
import Div from '../atoms/Div'
import H2 from '../atoms/H2'
import Alert from '../molecules/Alert'
import { ApiContext } from '../../context/ApiContext';
import { sortListByDate } from '../../utils/sortListByDate'
import {nanoid} from "nanoid"
import getColorAlertByDays from '../../utils/getColorAlertByDays'
import range from '../../data/range'
import daysLeft from '../../utils/daysLeft'
import getColorAlertByStatus from '../../utils/getColorAlertByStatus'


export const AlertsContainer = () => {

    const context = useContext(ApiContext);
    const [alerts, setAlert]= useState([])
    const [alertsLoaded, setAlertsLoaded]=useState(false)
    


    useEffect(() => {


    
        newArrayFromState(
            context.user[0].cars[0].variableFeatures.status.interior.map(element=>element),
            setAlert, 
        )
        newArrayFromState(
            context.user[0].cars[0].variableFeatures.status.exterior.map(element=>element),
            setAlert, 
        )
        newArrayFromState(
            context.user[0].cars[0].variableFeatures.status.tires.map(element=>element),
            setAlert, 
        )
        newArrayFromState(
            context.user[0].cars[0].variableFeatures.status.other.map(element=>element),
            setAlert, 
        )
        newArrayFromState(
            context.user[0].cars[0].variableFeatures.status.engine.map(element=>element),
            setAlert, 
        ) 
       

       /* const notOKAdministration=context.user[0].cars[0].variableFeatures.status.administration 
        const notOKExterior=context.user[0].cars[0].variableFeatures.status.exterior.filter(item=>item.isOk!=true)
        const notOKInterior=context.user[0].cars[0].variableFeatures.status.interior,
        const notOKtires=context.user[0].cars[0].variableFeatures.status.tires
    
        setAlertas(notOKExterior)
         */
        
        
       
    },[context.userLoaded]); 
/* 

    useEffect(() => {
       
       alertsLoaded && setAlert(sortListByDate(alerts))
       console.log(alerts)
      
       
       
    }, [alertsLoaded]);
 */
    console.log(alerts)

  


    return (
        <Div column>
            <H2>Avisos pendientes</H2>


            {/* {context.user[0].cars[0].variableFeatures.status.administration.map(elem=>{
                <Alert
                key={nanoid()}
                dueDate = {elem.dueDate}
                title= {elem.title}
                alert={elem.alert}
                type={elem.type}
                status={getColorAlertByDays( range[elem.title][elem.success], range[elem.title][elem.warning], daysLeft(elem.dueDate ))}/>

            })}
 */}
            {alerts.map(item=>{
                item.map(element=>{
                <Alert
                key={nanoid()}
                dueDate = {element.dueDate}
                title= {element.title}
                alert={element.alert}
                type={element.type}
                status={getColorAlertByStatus( element.isOk, element.isSerious )}
                />

                })
            })}
        </Div>
    )
}
