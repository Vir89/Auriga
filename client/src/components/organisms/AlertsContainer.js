import React, {useContext, useEffect, useState} from 'react'
import {newArrayFromState} from '../../utils/newArrayFromState'
import Div from '../atoms/Div'
import H2 from '../atoms/H2'
import Alert from '../molecules/Alert'
import {ApiContext} from '../../context/ApiContext';
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
    

    /* useEffect(() => {

        newArrayFromState(
            context.user[0].cars[0].variableFeatures.status.interior.map(element=>element),
            setAlert, 
        )
        newArrayFromState(
            context.user[0].cars[0].variableFeatures.status.exterior.map(element=>element),
            setAlert, 
        )
        newArrayFromState(
            context.user[0].cars[0].variableFeatures.status.driving.map(element=>element),
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
        newArrayFromState(
            context.user[0].cars[0].variableFeatures.status.administration.map(element=>element),
            context.setCarStatus, 
        ) 
        setAlertsLoaded(true)
    },[context.usersLoaded]); 
 */







    return (
        <Div column>
            <H2>Avisos pendientes</H2>

            {context.usersLoaded && context.carStatus.flat().sort((a,b)=>sortBySeverity(a.status)-(sortBySeverity(b.status))).map(elem=>{
 
                return(
                    <Alert
                        key={nanoid()}
                        dueDate = {elem.dueDate}
                        title= {elem.title}
                        alert={elem.alert}
                        type={elem.type} 
                        status={elem.status}  
                    />
                )

                })}
        
                
                {/* {context.usersLoaded && context.user[0].cars[0].variableFeatures.status.administration.map(elem=>{
                    const status= elem.title==="Multas" 
                        ? getColorAlertByStatus(elem.isOK, elem.isSerious)
                        : getColorAlertByDays( range[elem.title].success, range[elem.title].warning, elem.dueDate)
                return(
                
                    <Alert
                        key={nanoid()}
                        dueDate = {elem.dueDate}
                        title= {elem.title}
                        alert={elem.alert}
                        type={elem.type} 
                        status={status}  
                    />
                )

                })} */}
 
             {/* {alertsLoaded && alerts.flat().sort((a,b)=>sortBySeverity(a.isOK, a.isSerious)-(sortBySeverity(b.isOK, b.isSerious))).map(element=>{
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
             })} */}
               
                 
                
        </Div>
    )
}
