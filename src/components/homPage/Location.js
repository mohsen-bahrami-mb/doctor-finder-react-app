import { MdOutlineLocationOn } from "react-icons/md";
import React from 'react';

const Location = () => {
    return (
        <div className='col-span-3 md:col-span-1 flex items-center justify-center h-full rounded-lg duration-300 text-gray-600 hover:bg-gray-100'>
            <MdOutlineLocationOn />
            <h2 className="font-medium">شهر</h2>
        </div>
    );
};

export default Location;