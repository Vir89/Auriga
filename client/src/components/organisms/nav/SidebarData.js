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
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },
    {
        title: 'Área coches',
        path: '/area-coches',
        icon: <AiIcons.AiFillCar />,
        cName: 'nav-text',
    },
    {
        title: 'Área Personal',
        path: '/area-persona',
        icon: <IoIcons.IoMdPerson />,
        cName: 'nav-text',
    },
    {
        title: 'Mensajes',
        path: '/mensajes',
        icon: <AiIcons.AiOutlineMessage />,
        cName: 'nav-text',
    },
    {
        title: 'Suscripciones',
        path: '/suscripciones',
        icon: <FaIcons.FaRegMoneyBillAlt />,
        cName: 'nav-text',
    },
    {
        title: 'Contacto',
        path: '/contacto',
        icon: <FiIcons.FiHeadphones />,
        cName: 'nav-text',
    },
    {
        title: 'Cerrar Sesión',
        path: '/cerrar-sesion',
        icon: <BsIcons.BsFillPersonDashFill/>,
        cName: 'nav-text',
    },
]