import styled, {css} from "styled-components";

//card alert container

const Card = styled.div `
	background-color:  #f1f1f1ab;
	border-radius: 50px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2); 
	display: flex;
	max-width: 95%;
	margin: 10px;
	width: 95%;
	transition: all 500ms;
	padding: 5px;

	&:hover{
		transform: scale(1.00);
		${props=>props.warning && css`
        border:2px solid ${props => props.theme.colors.warning};
		`}
		

        ${props=>props.danger && css`
		border:2px solid ${props => props.theme.colors.danger};
		`}
		
    }	
	@media screen and (min-width: 700px) {
        width:45%;
        max-height:250px;
    }

`

export default Card;
