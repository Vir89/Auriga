import styled, {css} from "styled-components";

const H1 = styled.h1 `
    font-size: 1.5rem;
    font-weight: ${props => props.theme.textWeight.bold};

    ${props=>props.logo && css`
        color:${props => props.theme.colors.primary};
        text-align: center;
        font-size: 2rem;
        
    `}
    
    ${props=>props.suscription && css`
        color: black;
        text-align: center;
        margin-top: 20px;
    `}
`

export default H1;