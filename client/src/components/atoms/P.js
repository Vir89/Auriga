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


    


    
`

export default P