import styled from "styled-components";

const P = styled.p `
    font-size: 1.1rem;
    padding-left:5px;
    font-weight: ${props => props.theme.textWeight.regular};
    color:${props => props.theme.colors.primary};
`

export default P