import styled, {css} from "styled-components";

const H3 = styled.h3 `
    font-size: 1rem;
    padding-right:5px;
    font-weight: ${props => props.theme.textWeight.semiBold};
    color:${props => props.theme.colors.primary};

    ${props=>props.white && css`
    color:${props=>props.theme.colors.white};
    `}

    ${props=>props.secondary && css`
        color:${props => props.theme.colors.secondary} !important;
    `}
    
    ${props=>props.black && css`
        color:${props => props.theme.colors.black};
    `}

    ${props=>props.cars && css`
        color: ${props => props.theme.colors.whiteSmoke};
        padding-right:0px;
        margin-left: 10px;
        font-weight: ${props => props.theme.textWeight.bold};
    `}

    
`

export default H3;