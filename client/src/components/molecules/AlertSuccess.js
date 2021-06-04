import React from 'react'
import { DivAlert } from '../atoms/DivAlert'
import P from '../atoms/P'
import Span from '../atoms/Span'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

export const AlertSuccess = () => {
    return (
        <DivAlert >
            <Span success><RiCheckboxBlankCircleFill/> </Span>
            <P>Oferta de compra</P>

        </DivAlert>
    )
}
