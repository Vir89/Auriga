import styled, {css} from "styled-components";

const Button = styled.button `
    ${props=>props.main && css`
        border: none;
        background-color:${props => props.theme.colors.primary};
        color:${props => props.theme.colors.white};
        width: 360px;
        height:44px;
        border-radius:5px;

        ${props=>props.mainSuscri && css`
            width: 100%;
            border-radius:10px;
        `}
    `}

    ${props=>props.secondary && css`
        border: none;
        border:1px solid rgba(164,159,143,0.19);
        background-color:${props => props.theme.colors.buttonSecondary};
        color:${props => props.theme.colors.primary};
        box-shadow:4px 3px 8px -2px #1D4A7E;
        width: 360px;
        height:44px;
        border-radius:5px;
    `}

    /*${props=>props.mainSuscri && css`
        border: none;
        background-color:${props => props.theme.colors.primary};
        color:${props => props.theme.colors.white};
        width: 100%;
        height:44px;
        border-radius:10px;
    `}*/


    

`

export default Button;


