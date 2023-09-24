import { Link } from 'react-router-dom';
import React from 'react';

const Bottom = () => {
    return (
        <div className='flex flex-col gap-7 lg:flex-row lg:justify-between lg:items-center'>
            <p className='font-medium'>© تمامی حقوق مادی و معنوی این وب‌سایت، خدمات و محتوای مربوط به آن محفوظ می‌باشد.</p>
            <div className='flex items-center gap-5'>
                <Link className='font-medium hover:text-gray-300 duration-200' to='/'>شرایط و ضوابط</Link>
                <Link className='font-medium hover:text-gray-300 duration-200' to='/'>سیاست حفظ حریم خصوصی</Link>
            </div>
        </div>
    );
};

export default Bottom;