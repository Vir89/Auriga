import styled from "styled-components";

const Section = styled.section `
    margin: 20px 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 5px 5px 5px 10px;
    border-radius: 5px;
    background-color:${props => props.theme.colors.white};
`

export default Section;