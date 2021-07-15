import styled, {css} from "styled-components";

const Span = styled.span `
    display: flex;
    justify-content: center;
    align-items: center;
    padding:10px;
    font-size: 20px;
    margin: 0px 5px 0px 5px;
    border-radius: 50px;
    
    ${props=>props.danger && css`
    background-color:${props=>props.theme.colors.danger};
    `}
    ${props=>props.success && css`
    background-color:${props=>props.theme.colors.success};
    `}
    ${props=>props.warning && css`
    background-color:${props=>props.theme.colors.warning};
    `}
`

export default Span