import React from 'react'
import DivColumn from '../atoms/DivColumn'
import H2 from '../atoms/H2'
import { CarStatus } from '../molecules/CarStatus'
import {textData} from '../../data/textData'

export const CarStatusContainer = () => {
    return (
        <DivColumn>
            <H2>Estado general</H2>
            {textData.CarInfo[0].carStatus.map((status, n)=>
                <CarStatus
                key={n}
                status ={status}/>)}
            
        </DivColumn>
    )
}
