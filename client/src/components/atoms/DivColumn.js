import styled, {css} from "styled-components";

const DivColumn= styled.div `
    display: flex;
    flex-direction: column;
    padding:5px;
    ${props=>props.center && css`
        align-items: center;
        width: 100%;
       
    `}
    ${props=>props.padding && css`
        padding:15px;
    `}

    ${props=>props.span && css`
        background-color: #2A265F;
        color: #fff;
        padding: 20px;
        max-width: 250px;
        justify-content: center;
        background-color:${props => props.theme.colors.primary};
        ${props=>props.danger && css`
            background-color:${props => props.theme.colors.lightDanger} !important;
        `}
        ${props=>props.warning && css`
            background-color:${props => props.theme.colors.warning} !important;
        `}
        ${props=>props.success && css`
            background-color:${props => props.theme.colors.success} !important;
        `}
    `}
    

    
`

export default DivColumn;

