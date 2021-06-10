import React from 'react'
import * as FaIcons from 'react-icons/fa';
import DivNavBar from '../atoms/DivNavBar'
import H2Auriga from "../atoms/H2Auriga.js"
import { Link } from 'react-router-dom';

export const NavBarDiv = (props) => {

    

    return (
        <DivNavBar  sidebar={props.sidebar}>            
            <H2Auriga>AURIGA</H2Auriga>
            <Link to="#">
               <FaIcons.FaBars onClick={props.showSidebar} />
            </Link>
        </DivNavBar>
    )
}
