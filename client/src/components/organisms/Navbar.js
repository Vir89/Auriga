import React, {useState, Fragment} from 'react'
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
        <Fragment style={{marginBottom: "20px"}}>
        <IconContext.Provider value={{color: '#fff'}}>
         <NavBarDiv showSidebar={showSidebar}/>
         <NavMenuLinks showSidebar={showSidebar} sidebar={sidebar}/>
         </IconContext.Provider> 
        </Fragment>
    )
}

export default Navbar
