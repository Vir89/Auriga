import styled, {css} from "styled-components";

const ImgAccordeon = styled.img `
    width: 156px; /*or your image's width*/
    height: 100px; 
    object-fit: cover;

    
    ${props=>!props.isDisplaying && css`
        display:none;

        
    `} 

`

export default ImgAccordeon;