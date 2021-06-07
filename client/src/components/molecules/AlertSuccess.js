import React from 'react'
import { DivAlert } from '../atoms/DivAlert'
import H3 from '../atoms/H3'
import Span from '../atoms/Span'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

export const AlertSuccess = () => {
    return (
        <DivAlert >
            <Span success><RiCheckboxBlankCircleFill/> </Span>
            <H3>Oferta de compra</H3>

        </DivAlert>
    )
}
