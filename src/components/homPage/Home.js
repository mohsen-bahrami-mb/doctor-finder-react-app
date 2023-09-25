import React from 'react';
import Search from '../general/Search';
import Vector from './Vector';

const Home = () => {
    return (
        <div className='flex flex-col section gap-10 items-center justify-center h-screen'>
            <Vector />
            <Search />
        </div>
    );
};

export default Home;