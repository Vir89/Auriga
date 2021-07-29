import styled, {css} from "styled-components";

const Img = styled.img `
     aspect-ratio: auto;
     width: 250px;

     ${props=>props.logo && css`
        width: 120px;
        height: 120px;
        margin:auto;
        margin-top:30px;
        margin-bottom:20px;
    `}
${props=>props.cars && css`
    aspect-ratio: auto;
     width: 250px;
     height: 190px;
    `}
    ${props=>props.links && css`
    width: 68px;
    height: 68px;
    margin: 30px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: rgb(50 50 93 / 9%) 0px 0px 1px 1px, rgb(0 0 0 / 30%) 0px 2px 1px 0px;
    `}
    
    `

export default Img;