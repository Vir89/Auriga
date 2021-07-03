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



    
`

export default Div;
    
    
