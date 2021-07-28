import styled, {css} from "styled-components";

const Img = styled.img `
     aspect-ratio: auto;
     width: 250px;

     ${props=>props.logo && css`
        width: 150px;
        height: 150px;
        margin:auto;
        margin-top:30px;
        margin-bottom:50px;
    `}
    ${props=>props.google && css`
        width: 50px;
        height: 50px;
        margin:30px;
    `}
    ${props=>props.facebook && css`
        width: 50px;
        height: 50px;
        margin:30px;
    `}
    `

export default Img;