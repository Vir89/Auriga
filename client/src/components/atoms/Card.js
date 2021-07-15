import styled, {css} from "styled-components";

const Card = styled.div `
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
	display: flex;
	max-width: 95%;
	margin: 10px;
	overflow: hidden;
	width: 95%;
	transition: all 500ms;

	&:hover{
		transform: scale(1.05);
		${props=>props.warning && css`
        border:2px solid ${props => props.theme.colors.warning};
		`}
		

        ${props=>props.danger && css`
		border:2px solid ${props => props.theme.colors.danger};
		`}
		
    }

	



`

export default Card;