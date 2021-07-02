import React from 'react'
import { textData } from '../../data/textData'
import Div from '../atoms/Div'
import H2 from "../atoms/H2"
import P from "../atoms/P"
import Img from "../atoms/Img"

export const HeaderContainer = () => {

  
    return (
        <Div column center>
            <Div img>
            {/* https://static.wixstatic.com/media/d66462_7613e4ce7946499f8a9301f53af980fb~mv2.png/v1/fill/w_1157,h_665,al_c/d66462_7613e4ce7946499f8a9301f53af980fb~mv2.png */}
                <Img src="https://images.motorflash.com/filter?path=https%3A%2F%2Ffotos.estaticosmf.com%2Ffotos_jato%2Fimagenes%2FMarca_Modelo_Carroceria_Pintura%2Fg%2FRENAULT_MEGANE_HA_QPA%24QNC_F.png&size=700" />
            </Div>
            <H2>{textData.HomeProfileInfo[0].carModel}</H2>
            <P>{textData.HomeProfileInfo[0].date} - {textData.HomeProfileInfo[0].totalKM} kms</P>

        </Div>
    )
}
