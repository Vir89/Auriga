import styled from "styled-components";

const LiNavText = styled.li `      
    display: flex;
    justify-content: start;
    align-items: center;
    list-style: none;
    height: 60px;
    margin: 10px;
    font-weight: ${props => props.theme.textWeight.regular};
    z-index: 1;
   
`

export default LiNavText;