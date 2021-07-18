import styled, {css} from "styled-components";

export const Div = styled.div `
    ${props=>props.alert && css`
        width: 101%;
        margin: 9px -2px;
        display:flex;
        flex-flow: row wrap;
        padding: 10px;
        align-items: center;
        justify-content: space-between;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        background-color:${props => props.theme.colors.white} !important;
        ${props=>props.danger && css`
            background-color:${props => props.theme.colors.lightDanger} !important;
        `}
    `}

    ${props=>props.borderBottom && css`
        border-bottom: 1px solid #333;
    `}
    

    ${props=>props.column && css`
        display: flex;
        flex-direction: column;
        padding:5px;

        ${props=>props.left && css`
            align-items: flex-start;
            justify-content: center;
            width: 100%;
        `}
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
    `}

    ${props=>props.img && css`
        background-repeat: no-repeat;
        object-fit: cover;
        margin: 0;
        padding: 0;
    `}

    ${props=>props.form && css`
        background-color: "#1D4A7E";
     `}

    ${props=>props.socialMedia && css`
        background-color: "#ffff";
     `}
    

    ${props=>props.row && css`
        display: flex;
        flex-direction: row;
        

        ${props=>props.spaceBet && css`
            justify-content: space-between;
        `}
        ${props=>props.center && css`
            justify-content:center;
           
            
        `}
    `}

    ${props=>props.googleBtn && css`
        
        cursor: pointer;
        margin-top: 5px;
        width: 90%;
        height: 42px;
        margin-left: -19px;
        background-color: ${props => props.theme.colors.googleBlue};
        border-radius: 2px;
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
        transition: box-shadow .3s ease;
        &:hover {
        box-shadow: 0 0 6px ${props => props.theme.colors.googleBlue};
        }
        &:active {
            background: ${props => props.theme.colors.hoverButton};
        }

        
    `}

    ${props=>props.authSocialNetworks && css`
    
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding-top: 20px;
        padding-bottom: 20px;
        width: 100%;
        
    `}

    


    ${props=>props.googleIconWrapper && css`
        position: absolute;
        margin-top: 1px;
        margin-left: 1px;
        width: 40px;
        height: 40px;
        border-radius: 2px;
        background-color: ${props => props.theme.colors.white};
        
    `}
   
`

export default Div;
    
    
