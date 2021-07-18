import React from 'react'
import {IoMdCheckmarkCircleOutline} from "react-icons/io";

const getSuscriptionShowPlansFromObject = (user) => {
    const suscriptionShowLevel = {
        basic: <IoMdCheckmarkCircleOutline/>,
        estandar: <IoMdCheckmarkCircleOutline/>,
        premium: <IoMdCheckmarkCircleOutline/>,
        "": "inline-block",

    }
    return user ? suscriptionShowLevel[user] : "No está suscrito"
}
export default getSuscriptionShowPlansFromObject;