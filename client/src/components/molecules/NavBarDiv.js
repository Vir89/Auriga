import React, {useContext} from 'react'
import * as FaIcons from 'react-icons/fa';
import DivNavBar from '../atoms/DivNavBar'
import H2Auriga from "../atoms/H2Auriga.js"
import { Link } from 'react-router-dom';
import { ApiContext } from '../../context/ApiContext';

export const NavBarDiv = (props) => {

    const context = useContext(ApiContext);

    return (
        <DivNavBar  sidebar={props.sidebar}>            
            <H2Auriga>AURIGA</H2Auriga>
            {context.usersLoaded&&
            <Link to="#">
               <FaIcons.FaBars onClick={props.showSidebar} />
            </Link>
            }
        </DivNavBar>
    )
}
