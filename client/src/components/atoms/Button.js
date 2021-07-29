import styled, {css} from "styled-components";

const Button = styled.button `
    ${props=>props.main && css`
        border: none;
        background-color:${props => props.theme.colors.primary};
        color:${props => props.theme.colors.white};
        width: 72%;
        height:44px;
        border-radius:5px;
        margin: 15px;
        font-size: 1.2rem;

        @media screen and (min-width: 578px) {
		width:70%;
		}

        @media screen and (min-width: 1000px) {
		width:50%;
		}


    `}

    ${props=>props.landButton && css`
            background-color: ${props => props.theme.colors.darkGray};
            border: none;
            border-radius: 5px;
            color: ${props => props.theme.colors.white};
            padding: 15px 15px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 4px;
            width: 35%;
	    min-width: 110px;
            font-weight: 700;
                        


        ${props=>props.landButtonSec && css`
            background-color: ${props => props.theme.colors.white};
            color: ${props => props.theme.colors.darkGray};

        `}

        ${props=>props.visible && css`
        background-color: ${props => props.theme.colors.primary};

        `}
        
        ${props=>props.visibleNo && css`
        color: ${props => props.theme.colors.primary};

        `}


    `}

    ${props=>props.landButtonNoSuscrip && css`
            background-color: ${props => props.theme.colors.primary};
            border: none;
            border-radius: 5px;
            color: ${props => props.theme.colors.white};
            padding: 15px 15px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 4px;
            width: 100%;
            font-weight: 700;




    `}

    

`

export default Button;


