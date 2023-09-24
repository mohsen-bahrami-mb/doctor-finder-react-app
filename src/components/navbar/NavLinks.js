import NavLink from './NavLink';
import React from 'react';
import { getAllLinks } from './../../utils/data';

const NavLinks = () => {
    const links = getAllLinks();
    return (
        <div className='lg:order-1 hidden lg:flex items-center gap-10'>
            {links.map(link => 
                <NavLink key={link.id} {...link} />
            )}
        </div>
    );
};

export default NavLinks;