import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { Link } from 'react-router-dom';
import { SidebarData} from './SidebarData';
import { IconContext } from 'react-icons';
import './Navbar.css';

function Navbar() {
    
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
         <div className="navbar">
             <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
             </Link>
                <p className="h1-auriga">AURIGA</p>
         </div> 
         <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                 <Link to="#" className='menu-bars'>
                     <AiIcons.AiOutlineClose />
                 </Link>
                </li>
                <li>
                 <h3 className="h3-client">Hola (Nombre del Cliente)</h3>
                 <span className="span-cars"> Coches: <a href="#">(Marca-Modelo)</a><IoIcons.IoIosArrowDown /></span>
                </li>
                
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span className="title">{item.title}</span>
                            </Link>
                            <IoIcons.IoIosArrowForward />
                        </li>
            
                    )
                })}
            </ul>
         </nav> 
         </IconContext.Provider> 
        </>
    )
}

export default Navbar
