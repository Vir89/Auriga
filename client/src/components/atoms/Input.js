import styled from "styled-components";

const Input = styled.input`
    width:90%;
    padding:20px;
    background-color: #eee;
    height:40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    margin:10px;

    :hover{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }

    @media screen and (min-width: 578px) {
		width:70%;
		}

        @media screen and (min-width: 1000px) {
		width:50%;
		}
    
`
export default Input
