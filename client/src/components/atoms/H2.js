import styled from "styled-components";

const H2 = styled.h2 `
    font-size: 1.3rem;
    font-weight: ${props => props.theme.textWeight.bold};
    color:${props => props.theme.colors.primary};
`

export default H2;