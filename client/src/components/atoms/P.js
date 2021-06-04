import styled from "styled-components";

const P = styled.p `
    font-size: 0.9rem;
    font-weight: ${props => props.theme.textWeight.regular};
    color:${props => props.theme.colors.primary};
`

export default P