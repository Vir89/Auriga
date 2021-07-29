import styled, {css} from "styled-components";

const H2 = styled.h2 `
    font-size: 1.3rem;
    font-weight: ${props => props.theme.textWeight.bold};
    color:${props => props.theme.colors.primary};
    margin: auto;


    ${props=>props.nav && css`
        color: ${props => props.theme.colors.whiteSmoke};
        padding-left: 136px;
    `}

    ${props=>props.suscription && css`
        color: black;
        text-align: center;
    `}
    ${props=>props.network&& css`
        color:#675d5d;
    `}
    ${props=>props.client && css`
        color: ${props => props.theme.colors.whiteSmoke};
        margin: 0px 10px 7px;
    `}
    ${props=>props.avisos && css`
        font-size: 1.5rem;
        margin: auto;
        margin-top: 20px;
    `}

    


    
`


export default H2;