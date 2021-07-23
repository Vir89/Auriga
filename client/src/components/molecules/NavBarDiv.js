import React from 'react'
import * as FaIcons from 'react-icons/fa';
import DivNavBar from '../atoms/DivNavBar'
import H2 from "../atoms/H2.js"
import { Link } from 'react-router-dom';

export const NavBarDiv = (props) => {

    

    return (
        <DivNavBar  sidebar={props.sidebar}>            
            <H2 nav>AURIGA</H2>
            <Link to="#">
               <FaIcons.FaBars onClick={props.showSidebar} />
            </Link>
        </DivNavBar>
    )
}
