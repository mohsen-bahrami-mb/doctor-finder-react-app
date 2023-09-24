import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/images/logo.png'

const Logo = () => {
    return (
        <Link to='/' className='lg:order-2 hidden md:block'>
            <img className='w-28 lg:w-32' src={logo} alt='logo'/>
        </Link>
    );
};

export default Logo;