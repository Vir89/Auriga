

import styled, {css} from "styled-components";

const SpanContainer = styled.div `
    background-color: #2A265F;
	color: #fff;
	padding: 30px;
	max-width: 250px;
    background-color:${props => props.theme.colors.primary};
    ${props=>props.danger && css`
        background-color:${props => props.theme.colors.lightDanger} !important;
    `}
    ${props=>props.warning && css`
        background-color:${props => props.theme.colors.warning} !important;
    `}
    ${props=>props.success && css`
        background-color:${props => props.theme.colors.success} !important;
    `}
`

export default SpanContainer;