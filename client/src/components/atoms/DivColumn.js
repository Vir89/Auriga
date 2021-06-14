import styled, {css} from "styled-components";

const DivColumn= styled.div `
    display: flex;
    flex-direction: column;
    padding:5px;
    
    ${props=>props.center && css`
        align-items: center;
        justify-content: center;
        width: 100%;
       
    `}
    
    ${props=>props.padding && css`
        padding:25px;
    `}
     ${props=>props.danger && css`
            background-color:${props => props.theme.colors.lightDanger} ;
        `} 
    ${props=>props.warning && css`
        background-color:${props => props.theme.colors.warning} ;
    `}
    ${props=>props.success && css`
        background-color:${props => props.theme.colors.success} ;
    `}

    ${props=>props.span && css`
        
        color: #000;
        padding: 15px;
        max-width: 250px;
        justify-content: center;
        
    `}
    

    
`

export default DivColumn;

