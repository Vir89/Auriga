import React from 'react'
import NavMenu from '../atoms/NavMenu'
import UlNavMenu from '../atoms/UlNavMenu';
import { Link } from 'react-router-dom';
//import LiItems from '../atoms/LiItems';
import LiNavText from '../atoms/LiNavText';
import { SidebarData } from '../organisms/SidebarData';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import Span from '../atoms/Span';
//import H3 from '../atoms/H3';
import H2 from '../atoms/H2';
import DivNavBar from '../atoms/DivNavBar';
import styled from 'styled-components';

 const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 1rem;
  position: relative;
  z-index: 90,
`

export const NavMenuLinks = (props) => {

   
    return (
        <NavMenu  sidebar={props.sidebar}>               
            
            <UlNavMenu>                
            <DivNavBar  sidebar={props.sidebar}>            
            <H2 nav>AURIGA</H2>
            <Link to="#">
                <AiIcons.AiOutlineClose onClick={props.showSidebar}/>
            </Link>
        </DivNavBar>
                {/* <LiItems>
                    <H2 client> Hola (Nombre del Cliente)</H2>
                    <H3 cars> Coches: (Marca-Modelo)<IoIcons.IoIosArrowDown /> </H3>
                </LiItems> */}
                {
                    SidebarData.map((item, index) => {
                        return (
                            <LiNavText key={index}  onClick={props.showSidebar}>
                                <StyledLink to={item.path}>                                                                                                                                   
                                   {item.icon} <Span title>  {item.title} <IoIcons.IoIosArrowForward /></Span>
                                </StyledLink>
                                
                            </LiNavText>               
                        )
                    })}                
            </UlNavMenu>
        
        </NavMenu>
    )
}