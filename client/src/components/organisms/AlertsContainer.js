import React, {useContext, useEffect, useState} from 'react'
import {newArrayFromState} from '../../utils/newArrayFromState'
import Div from '../atoms/Div'
import H2 from '../atoms/H2'
import Alert from '../molecules/Alert'
import { ApiContext } from '../../context/ApiContext';
import { sortListByDate } from '../../utils/sortListByDate'

export const AlertsContainer = () => {

    const context = useContext(ApiContext);

    const [alerts, setAlert]= useState([])
    const [alertsLoaded, setAlertsLoaded]=useState(false)
    const [alertas, setAlertas]=useState([])


    useEffect(() => {

        /* newArrayFromState(
            context.user[0].cars[0].variableFeatures.status.administration.insurance,
            setAlert, 
        )
    
        newArrayFromState(
            context.user[0].cars[0].variableFeatures.status.interior[1],
            setAlert, 
        )

        newArrayFromState(
            context.user[0].cars[0].variableFeatures.status.administration.itv,
            setAlert, 
        )

        newArrayFromState(
            context.user[0].cars[0].variableFeatures.status.administration.maintancePlan,
            setAlert, 
        )

        newArrayFromState(
            context.user[0].cars[0].variableFeatures.status.tires[2],
            setAlert, 
        )
        setAlertsLoaded(true) */

       /*  const notOKAdministration=context.user[0].cars[0].variableFeatures.status.administration */
        const notOKExterior=context.user[0].cars[0].variableFeatures.status.exterior.filter(item=>item.isOk!=true)
        /* const notOKInterior=context.user[0].cars[0].variableFeatures.status.interior,
        const notOKtires=context.user[0].cars[0].variableFeatures.status.tires
    */
        setAlertas(notOKExterior)
        
        
        
       
    },[context.userLoaded]);


    useEffect(() => {
       
       alertsLoaded && setAlert(sortListByDate(alerts))
       console.log(alerts)
      
       
       
    }, [alertsLoaded]);


  


    return (
        <Div column>
            <H2>Avisos pendientes</H2>

           
           {alertas.map((alert, n)=>
                <Alert
                key={n}
                alert ={alert}/>)}
            
        </Div>
    )
}
