import React from 'react'
import { textData } from '../../data/textData'
import DivColumn from '../atoms/DivColumn'
import H2 from "../atoms/H2"
import P from "../atoms/P"

export const HeaderContainer = () => {
    return (
        <DivColumn>
            
            <H2>{textData.HomeProfileInfo[0].carModel}</H2>
            <P>{textData.HomeProfileInfo[0].date} - {textData.HomeProfileInfo[0].totalKM} kms</P>

        </DivColumn>
    )
}
