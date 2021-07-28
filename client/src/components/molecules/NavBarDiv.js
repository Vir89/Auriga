import React, {useContext} from 'react'
import * as FaIcons from 'react-icons/fa';
import DivNavBar from '../atoms/DivNavBar'
import AurigaLogo from '../../styles/img/AurigaLogo.png'
import Img from '../atoms/Img';
import { Link } from 'react-router-dom';
import { ApiContext } from '../../context/ApiContext';

export const NavBarDiv = (props) => {

    const context = useContext(ApiContext);

    return (
        <DivNavBar  sidebar={props.sidebar}>            
            <Img auriga src={AurigaLogo} />
            {context.usersLoaded&&  
            <Link to="#">
               <FaIcons.FaBars onClick={props.showSidebar} style={{
               height: "190px",
               width: "30px",
               marginRight: "12px",
               }}
               />
            </Link>
            }
        </DivNavBar>
    )
}
