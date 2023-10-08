import DoctorInfo from './DoctorInfo';
import React from 'react';
import VisitSidebar from './VisitSidebar';

const DoctorPage = () => {
    return (
        <div className='section grid grid-cols-1 md:grid-cols-3 gap-5'>
            <VisitSidebar />
            <DoctorInfo />
        </div>
    );
};

export default DoctorPage;