import styled, {css} from "styled-components";

const Card = styled.div `

	${props=>props.alert && css`
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
		display: flex;
		max-width: 100%;
		margin: 10px;
		overflow: hidden;
		width: 95%;
    
    `}
    

`

export default Card;