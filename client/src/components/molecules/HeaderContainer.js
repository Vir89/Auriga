import React, {useContext} from 'react'
import Div from '../atoms/Div'
import H2 from "../atoms/H2"
import P from "../atoms/P"
import Img from "../atoms/Img"
import { ApiContext } from '../../context/ApiContext';




const HeaderContainer = () => {
    const context = useContext(ApiContext);

  
    return (
        <Div column center>
            <Div img>
            
                <Img src={context.user.cars[0].staticFeatures.Image}/>
            </Div>
            <Div column center>
            <H2>{context.user.cars[0].staticFeatures.brand} {context.user.cars[0].staticFeatures.model}</H2>
            <P>{context.user.cars[0].staticFeatures.year} - {context.user.cars[0].variableFeatures.kM} kms</P>
            </Div>
        </Div>
    )
}

export default HeaderContainer