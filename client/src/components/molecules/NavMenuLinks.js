import AurigaLogo from '../../styles/img/AurigaLogo.png'
import DivNavBar from '../atoms/DivNavBar';
import Img from '../atoms/Img';
import { SidebarData } from '../organisms/SidebarData';
import { Link } from 'react-router-dom';
import LiNavText from '../atoms/LiNavText';
import React from 'react';
import styled from 'styled-components';
import NavMenu from '../atoms/NavMenu'
import UlNavMenu from '../atoms/UlNavMenu';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const StyledLink = styled(Link)`
text-decoration: none;
margin: 1rem;
position: relative;
color: #ffff;
font-size: 1.2rem;
`

export const NavMenuLinks = (props) => {

   
    return (
        <NavMenu  sidebar={props.sidebar}>               
            
            <UlNavMenu>                
            <DivNavBar  sidebar={props.sidebar}>            
            
            <Img auriga src={AurigaLogo} />
            <Link to="#">
                <AiIcons.AiOutlineClose  onClick={props.showSidebar} style={{
                    height: "110px",
                    width: "31px",
                    marginRight: "12px"                
                }} 
                />
            </Link>
        </DivNavBar>
                {
                    SidebarData.map((item, index) => {
                        return (
                            <LiNavText key={index}  onClick={props.showSidebar}>
                                {item.icon}                                
                                <StyledLink to={item.path}>                      
                                {item.title}
                                </StyledLink>
                                 <IoIcons.IoIosArrowForward styled={{marginRight: "auto"}}/>                                
                            </LiNavText>               
                        )
                    })}                
            </UlNavMenu>        
        </NavMenu>
    )
}