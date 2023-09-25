import DoctorsList from './DoctorsList';
import Filter from './Filter';
import React from 'react';

const FilterAndList = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 w-full mt-20 gap-5'>
            <Filter />
            <DoctorsList />
        </div>
    );
};

export default FilterAndList;