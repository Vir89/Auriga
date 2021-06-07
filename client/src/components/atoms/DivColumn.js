import styled, {css} from "styled-components";

const DivColumn= styled.div `
    display: flex;
    flex-direction: column;
    ${props=>props.center && css`
        align-items: center;
    `}
    
`

export default DivColumn;

