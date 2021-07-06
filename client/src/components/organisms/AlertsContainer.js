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
import getDaysLeft from '../../utils/getDaysLeft'
import getColorAlertByStatus from '../../utils/getColorAlertByStatus'
import sortBySeverity from '../../utils/sortBySeverity'


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
        setAlertsLoaded(true)
        
       
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
             {alertsLoaded && alerts.flat().sort((a,b)=>sortBySeverity(a.isOK, a.isSerious)-(sortBySeverity(b.isOK, b.isSerious))).map(element=>{
                return (<Alert
                    key = {nanoid()}
                    dueDate = {element.dueDate}
                    title =  {element.title}
                    alert = {element.alert}
                    type  = {element.type}
                    statusDescription={element.statusDescription}
                    img  = {element.img}
                    status={getColorAlertByStatus(element.isOK, element.isSerious)}
                />)
             })}
               
                 
                
        </Div>
    )
}
