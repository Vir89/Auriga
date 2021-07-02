import React from 'react'
import { textData } from '../../data/textData'
import DivRow from '../atoms/DivRow'
import H3 from "../atoms/H3"
import H2 from "../atoms/H2"
import DivColumn from '../atoms/DivColumn'
import SuscriptionType from '../molecules/SuscriptionType'


const SuscriptionContainer = () => {
    return (
        < DivColumn>
            <SuscriptionType/>

        </DivColumn>
        
    )
}
export default SuscriptionContainer;