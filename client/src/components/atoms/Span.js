import styled, {css} from "styled-components";

const Span = styled.span `
    padding-left:5px;
    padding-right:5px;
    font-size: 20px;
    margin: 0px 5px 0px 5px;
    
    ${props=>props.danger && css`
    color:${props=>props.theme.colors.danger};
    `}
    ${props=>props.success && css`
    color:${props=>props.theme.colors.success};
    `}
    ${props=>props.warning && css`
    color:${props=>props.theme.colors.warning};
    `}
`

export default Span