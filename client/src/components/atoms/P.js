import styled, {css} from "styled-components";


const P = styled.p `
    font-size: 1.1rem;
    padding-left:5px;
    font-weight: ${props => props.theme.textWeight.regular};
    color:${props => props.theme.colors.primary};

    ${props=>props.alertDescription && css`
        padding-top:15px;
        padding-bottom:15px;

    `}


    
`

export default P