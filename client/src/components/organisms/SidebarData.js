import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
    {
        title: 'Página Principal',
        path: '/',
        icon: <AiIcons.AiFillHome style={{width:"24px", height:"23px"}}/>,
        cName: 'nav-text',
    },
    {
        title: 'Área coches',
        path: '/area-coches',
        icon: <AiIcons.AiFillCar style={{width:"24px", height:"23px"}} />,
        cName: 'nav-text',
    },
    {
        title: 'Área Personal',
        path: '/area-personal',
        icon: <IoIcons.IoMdPerson style={{width:"24px", height:"23px"}} />,
        cName: 'nav-text',
    },
    {
        title: 'Mensajes',
        path: '/mensajes',
        icon: <AiIcons.AiOutlineMessage style={{width:"24px", height:"23px"}} />,
        cName: 'nav-text',
    },
    {
        title: 'Suscripciones',
        path: '/suscripciones',
        icon: <FaIcons.FaRegMoneyBillAlt style={{width:"24px", height:"23px"}} />,
        cName: 'nav-text',
    },
    {
        title: 'Contacto',
        path: '/contacto',
        icon: <FiIcons.FiHeadphones style={{width:"24px", height:"23px"}} />,
        cName: 'nav-text',
    },
    {
        title: 'Cerrar Sesión',
        path: '/login',
        icon: <BsIcons.BsFillPersonDashFill style={{width:"24px", height:"23px"}}/>,
        cName: 'nav-text',
    },
]