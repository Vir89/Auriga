import styled, {css} from "styled-components";

const H1 = styled.h1 `
    font-size: 1.5rem;
    font-weight: ${props => props.theme.textWeight.bold};

    ${props=>props.logo && css`
        color:${props => props.theme.colors.primary};
        text-align: center;
        font-size: 2rem;
        
    `}
`

export default H1;