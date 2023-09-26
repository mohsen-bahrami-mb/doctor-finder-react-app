import React from 'react';
import Search from '../../components/general/Search';
import Vector from './Vector';

const Home = () => {
    return (
        <div className='flex flex-col section gap-10 items-center justify-center h-[91vh]'>
            <Vector />
            <Search />
        </div>
    );
};

export default Home;