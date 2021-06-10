import styled, {css} from "styled-components";

const DivRow = styled.div `
    display: flex;
    flex-direction: row;
    padding:10px;
    ${props=>props.spaceBet && css`
        justify-content: space-between;
    `}
    
`

export default DivRow;


