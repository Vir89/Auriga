import styled, {css} from "styled-components";

const H2 = styled.h2 `
    font-size: 1.3rem;
    font-weight: ${props => props.theme.textWeight.bold};
    color:${props => props.theme.colors.primary};

    ${props=>props.nav && css`
        color: ${props => props.theme.colors.whiteSmoke};
        padding-left: 136px;
    `}

    ${props=>props.client && css`
        color: ${props => props.theme.colors.whiteSmoke};
        margin: 0px 10px 7px;
    `}


    
`


export default H2;