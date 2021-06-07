import styled, {css} from "styled-components";

export const DivAlert = styled.div `
    width: 95%;
    margin:5px;
    display:flex;
    flex-direction: row;
    padding: 5px;
    border-radius: 50px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    background-color:${props => props.theme.colors.white} !important;
    ${props=>props.danger && css`
        background-color:${props => props.theme.colors.lightDanger} !important;
    `}
    
    
`
