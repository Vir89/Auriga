import styled from "styled-components";

const Button = styled.button `
    text-align: center;
    
    border: 0;
    border-radius: 50px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    padding: 20x;
   
    margin-top:10px;
    background-color:${props => props.theme.colors.primary} ;
    
    

`

export default Button;


