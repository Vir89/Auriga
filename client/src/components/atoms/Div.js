import styled, {css} from "styled-components";

export const Div = styled.div `
    ${props=>props.alert && css`
        width: 95%;
        margin:5px;
        display:flex;
        flex-flow: row wrap;
        padding: 10px;
        border-radius: 50px;
        align-items: center;
        justify-content: space-between;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        background-color:${props => props.theme.colors.white} !important;
        ${props=>props.danger && css`
            background-color:${props => props.theme.colors.lightDanger} !important;
        `}
    `}

    ${props=>props.borderBottom && css`
        border-bottom: 1px solid #333;
    `}
    

    ${props=>props.column && css`
        display: flex;
        flex-direction: column;
        padding:5px;
        
        ${props=>props.center && css`
            align-items: center;
            justify-content: center;
            width: 100%;
        `}
        ${props=>props.padding && css`
            padding:25px;
        `}
        ${props=>props.danger && css`
                background-color:${props => props.theme.colors.lightDanger} ;
        `} 
        ${props=>props.warning && css`
            background-color:${props => props.theme.colors.warning} ;
        `}
        ${props=>props.success && css`
            background-color:${props => props.theme.colors.success} ;
        `}
        ${props=>props.span && css`
            color: #000;
            padding: 15px;
            max-width: 250px;
            justify-content: center; 
        `}
    `}

    ${props=>props.img && css`
        background-repeat: no-repeat;
        width: 150px; /*or your image's width*/
        height: 110px; /*or your image's height*/
        object-fit: cover;
        margin: 0;
        padding: 0;
    `}

    ${props=>props.row && css`
        display: flex;
        flex-direction: row;
        padding:10px;

        ${props=>props.spaceBet && css`
            justify-content: space-between;
        `}
    `}

    //landing page - subscription services type 


    ${props=>props.containerTypeServices && css`
        display: flex;
        flex-direction: row wrap;
        justify-content: center;
        width: 100%;
        height: auto;
        padding: 10px;
    `}

    ${props=>props.suscriCard && css`
        display: flex;
        flex-flow: column wrap;
        justify-content: flex-start;
        width: 100%;
        align-items: center;
        height: auto;
        box-shadow: 0px 2px 18px 0px rgb(0 0 0 / 30%);
        margin: 30px;
        border-radius: 10px;
        padding: 10px;
        transition: .15s;
    `}

    ${props=>props.levelSubscription && css`
        display: flex;
        flex-direction: row wrap;
        width: 90%;
        height: 100px;
        margin: 10px;
        justify-content: center;
        align-items: center;
    `}
    
    ${props=>props.descripFrequency && css`
        margin-bottom: 20px;
        border-bottom: 2px outset rgb(0 0 0 / 30%);
    `}

    ${props=>props.listDescripSuscriCard && css`
        display: flex;
        flex-flow: column wrap;
    `}

    ${props=>props.listDescriptionInfo && css`
        padding: 10px;
        padding-top: 30px;
        display: flex;
        flex-direction: column;
    `}

    ${props=>props.descripFrequencyVisits && css`
        display: flex;
        flex-direction: row;
        justify-content:flex-start;
        margin: 10px;
        font-size: 20px;
        margin-bottom: 15px;
    `}

    //ends landing page - subscription services type 

    
`

export default Div;
    
    
