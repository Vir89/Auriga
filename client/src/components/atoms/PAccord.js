import styled, {css} from "styled-components";


const PAccord = styled.p `
    font-size: 1.1rem;
    padding-left:5px;
    padding-top:10px;
    padding-bottom:10px;
    font-weight: ${props => props.theme.textWeight.regular};
    color:${props => props.theme.colors.primary};
    ${props=>!props.isDisplaying && css`
        display:none;

        
    `} 
    


    
`

export default PAccord