import styled from "styled-components";

const LiNavText = styled.li `      
    display: flex;
    justify-content: start;
    align-items: center;
    list-style: none;
    height: 60px;
    margin-left: 10px;
    font-weight: ${props => props.theme.textWeight.regular};
   
`

export default LiNavText;