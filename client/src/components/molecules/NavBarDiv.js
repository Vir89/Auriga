import React, {useContext} from 'react'
import * as FaIcons from 'react-icons/fa';
import DivNavBar from '../atoms/DivNavBar'
import H2 from "../atoms/H2.js"
import { Link } from 'react-router-dom';
import { ApiContext } from '../../context/ApiContext';

export const NavBarDiv = (props) => {

    const context = useContext(ApiContext);

    return (
        <DivNavBar  sidebar={props.sidebar}>            
            <H2 nav>AURIGA</H2>
            {context.usersLoaded&&  
            <Link to="#">
               <FaIcons.FaBars onClick={props.showSidebar} />
            </Link>
            }
        </DivNavBar>
    )
}
