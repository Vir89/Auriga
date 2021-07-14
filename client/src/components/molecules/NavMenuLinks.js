import React from 'react'
import NavMenu from '../atoms/NavMenu'
import UlNavMenu from '../atoms/UlNavMenu';
import { Link } from 'react-router-dom';
import LiItems from '../atoms/LiItems';
import LiNavText from '../atoms/LiNavText';
import { SidebarData } from '../organisms/SidebarData';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import SpanTitle from '../atoms/SpanTitle';
import H3Cars from '../atoms/H3Cars';
import H2Client from '../atoms/H2Client';
import H2Auriga from '../atoms/H2Auriga';
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
            <H2Auriga>AURIGA</H2Auriga>
            <Link to="#">
                <AiIcons.AiOutlineClose onClick={props.showSidebar}/>
            </Link>
        </DivNavBar>
                {/* <LiItems>
                    <H2Client> Hola (Nombre del Cliente)</H2Client>
                    <H3Cars> Coches: (Marca-Modelo)<IoIcons.IoIosArrowDown /> </H3Cars>
                </LiItems> */}
                {
                    SidebarData.map((item, index) => {
                        return (
                            <LiNavText key={index}  onClick={props.showSidebar}>
                                <StyledLink to={item.path}>                                                                                                                                   
                                   {item.icon} <SpanTitle>  {item.title} <IoIcons.IoIosArrowForward /></SpanTitle>
                                </StyledLink>
                                
                            </LiNavText>               
                        )
                    })}                
            </UlNavMenu>
        
        </NavMenu>
    )
}