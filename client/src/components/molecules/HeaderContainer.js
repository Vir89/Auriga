import React, {useState} from 'react'
import { textData } from '../../data/textData'
import DivColumn from '../atoms/DivColumn'
import DivImg from '../atoms/DivImg'
import H2 from "../atoms/H2"
import P from "../atoms/P"
import Img from "../atoms/Img"

export const HeaderContainer = () => {

  
    return (
        <DivColumn center>
            <DivImg>
                <Img src="https://images.motorflash.com/filter?path=https%3A%2F%2Ffotos.estaticosmf.com%2Ffotos_jato%2Fimagenes%2FMarca_Modelo_Carroceria_Pintura%2Fg%2FRENAULT_MEGANE_HA_QPA%24QNC_F.png&size=700" />
            </DivImg>
            <H2>{textData.HomeProfileInfo[0].carModel}</H2>
            <P>{textData.HomeProfileInfo[0].date} - {textData.HomeProfileInfo[0].totalKM} kms</P>

        </DivColumn>
    )
}
