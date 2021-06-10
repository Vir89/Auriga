import React from 'react'
import NavMenu from '../atoms/NavMenu'
import H2 from "../atoms/H2"
import UlNavMenu from '../atoms/UlNavMenu';
import LiToggle from '../atoms/LiToggle';
import { Link } from 'react-router-dom';
import LiItems from '../atoms/LiItems';
import SpanCars from '../atoms/SpanCars';
import LiNavText from '../atoms/LiNavText';
import { SidebarData } from '../organisms/SidebarData';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import SpanTitle from '../atoms/SpanTitle';

export const NavMenuLinks = (props) => {

    
   
    return (
        <NavMenu  sidebar={props.sidebar}>               
            
            <UlNavMenu onClick={props.showSidebar}>
                <LiToggle>
                    <Link to="#">
                        <AiIcons.AiOutlineClose onClick={props.showSidebar}/>
                    </Link>
                </LiToggle>
                <LiItems>
                    <H2> Hola (Nombre del Cliente)</H2>
                    <SpanCars> Coches: (Marca-Modelo)<IoIcons.IoIosArrowDown /> </SpanCars>
                </LiItems>
                {
                    SidebarData.map((item, index) => {
                        return (
                            <LiNavText key={index}>
                                <Link to={item.path}> 
                                {item.icon}                                   
                                    <SpanTitle>{item.title}</SpanTitle>
                                </Link>
                                <IoIcons.IoIosArrowForward />
                            </LiNavText>
                
                        )
                    })}                
            </UlNavMenu>
        
        </NavMenu>
    )
}