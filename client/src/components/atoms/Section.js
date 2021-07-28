import styled, {css} from "styled-components";

const Section = styled.section `
    //margin: 20px 8px;
    //box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    // padding: 5px 5px 5px 10px;
    border-radius: 5px;
    background-color:${props => props.theme.colors.white};

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
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    `}


    
    ${props=>props.zindex && css`
        z-index:0;

    `}
`

export default Section;