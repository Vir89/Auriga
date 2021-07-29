import styled, {css} from "styled-components";

const Ahref= styled.a `
    color: #ffff;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: ${props => props.theme.textWeight.bold};
    
    ${props=>props.google && css`
        float: right;
        margin: 11px 89px 0 0;
        color: ${props => props.theme.colors.white};
        font-size: 14px;
        letter-spacing: 0.2px;
        text-decoration: none;
    
		`}
`



export default Ahref;