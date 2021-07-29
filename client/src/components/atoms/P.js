import styled, {css} from "styled-components";


const P = styled.p `
    font-size: 1.2rem;
    padding-left:5px;
    font-weight: ${props => props.theme.textWeight.regular};
    color:${props => props.theme.colors.primary};

    ${props=>props.alertDescription && css`
        padding-top:15px;
        padding-bottom:15px;

        
    `}

    ${props=>props.googleText && css`
        float: right;
        margin: 11px 89px 0 0;
        color: ${props => props.theme.colors.white};
        font-size: 14px;
        letter-spacing: 0.2px;

        
    `}

    ${props=>props.paragraphLanding && css`
        text-align: center;
        font-size: 0.9rem;
        padding-left:5px;
        font-weight: ${props => props.theme.textWeight.regular};
        color:${props => props.theme.colors.black};

    `}

    ${props=>props.profile && css`
        width:70%;
        padding: 10px;
        margin:10px;
        border: 2px solid darkblue;
        position: relative;
        border-radius: 5px;

        :before {
            ${(props) => css`
            content: "${props.tag}";
            color:${props => props.theme.colors.primary};
            font-weight: bold;
            `}
            position: absolute;
            font-size: 75%;
            top: -10px;
            left: 15px;
            width: max-content;
            padding: 0 20px 0 20px;
            background-color:${props => props.theme.colors.white};
        }

    `}


  
    


    
`

export default P