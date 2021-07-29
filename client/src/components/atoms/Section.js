import styled, {css} from "styled-components";

const Section = styled.section `

    background-color: #f1f1f1ab;

    ${props=>props.formRegister && css`
        background-color:${props => props.theme.colors.tertiary};
        width: 100%;
        height: 100%;
        border-bottom-left-radius: 12em 5em;
        border-bottom-right-radius: 12em 5em;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    `}

    ${props=>props.formLogin && css`
        background-color:${props => props.theme.colors.tertiary};
        width: 100%;
        height: 550px;
        border-bottom-left-radius: 12em 5em;
        border-bottom-right-radius: 12em 5em;
        box-shadow: rgb(50 50 93 / 17%) 0px 2px 5px 3px, rgb(0 0 0 / 30%) 0px 1px 3px 0px;
    `}
    
    ${props=>props.formRegister && css`
        background-color:${props => props.theme.colors.tertiary};
        width: 100%;
        height: 581px;
        border-bottom-left-radius: 12em 5em;
        border-bottom-right-radius: 12em 5em;
        box-shadow: rgb(50 50 93 / 17%) 0px 2px 5px 3px, rgb(0 0 0 / 30%) 0px 1px 3px 0px;
    `}

    ${props=>props.zindex && css`
        z-index:0;

    `}
`

export default Section;