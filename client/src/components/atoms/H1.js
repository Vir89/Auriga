import styled from "styled-components";

const H1 = styled.h1 `
    font-size: 20px;
    font-weight: ${props => props.theme.textWeight.bold};
`

export default H1;