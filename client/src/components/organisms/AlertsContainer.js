import React, {useContext} from 'react'

import Div from '../atoms/Div'
import H2 from '../atoms/H2'
import Alert from '../molecules/Alert'
import {ApiContext} from '../../context/ApiContext';

import {nanoid} from "nanoid"

import sortBySeverity from '../../utils/sortBySeverity'


export const AlertsContainer = () => {

    const context = useContext(ApiContext);
  


    return (
        <Div column>
            <H2>Avisos pendientes</H2>

            {context.usersLoaded && context.carStatus.flat().sort((a,b)=>sortBySeverity(a.status)-(sortBySeverity(b.status))).map(elem=>{
               
               return ( 
                    elem.status!=="success" && 
                    <Alert
                        key={nanoid()}
                        dueDate = {elem.dueDate}
                        title= {elem.title}
                        description={elem.statusDescription}
                        type={elem.type} 
                        status={elem.status}  
                    />
                )

                })}
                 
                
        </Div>
    )
}
