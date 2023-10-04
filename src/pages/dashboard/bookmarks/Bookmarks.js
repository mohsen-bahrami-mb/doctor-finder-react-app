import DoctorCard from './DoctorCard';
import React from 'react';

const Bookmarks = () => {
    return (
        <div className='bg-white px-5 py-16 rounded-md shadow-md'>
        <h2 className='text-slate-800 font-bold text-xl mb-7'>لیست پزشکان من</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
            
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
        </div>
        </div>
    );
};

export default Bookmarks;