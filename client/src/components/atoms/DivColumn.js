import styled, {css} from "styled-components";

const DivColumn= styled.div `
    display: flex;
    flex-direction: column;
    margin-left:5px;
    padding:5px;
    ${props=>props.center && css`
        align-items: center;
    `}
    
`

export default DivColumn;

