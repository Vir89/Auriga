import styled, {css} from "styled-components";

const Label = styled.label `
    color:${props => props.theme.colors.primary};
    font-size: 1.2rem;
    font-weight: ${props => props.theme.textWeight.bold};
    padding:5px;
    

    
`

export default Label;