import styled from "styled-components";

const H3 = styled.h3 `
    font-size: 1rem;
    font-weight: ${props => props.theme.textWeight.semiBold};
    color:${props => props.theme.colors.primary};
`

export default H3;