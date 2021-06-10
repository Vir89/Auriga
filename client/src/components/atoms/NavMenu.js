import styled, {css} from "styled-components";

const NavMenu = styled.nav `
    background-color: #1D4A7F;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: -150%;
    transition: 850ms;
    ${props=>!props.sidebar && css`
    top: 0; 
    transition: 350ms;`}
`

export default NavMenu;