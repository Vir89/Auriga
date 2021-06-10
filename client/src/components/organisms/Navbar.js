import React, {useState} from 'react'
import { IconContext } from 'react-icons';
import { NavBarDiv } from '../molecules/NavBarDiv';
import { NavMenuLinks } from '../molecules/NavMenuLinks';

function Navbar() {
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => {
        console.log("click");
        setSidebar(!sidebar)
    };
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
         <NavBarDiv showSidebar={showSidebar}/>
         <NavMenuLinks showSidebar={showSidebar} sidebar={sidebar}/>
         </IconContext.Provider> 
        </>
    )
}

export default Navbar
