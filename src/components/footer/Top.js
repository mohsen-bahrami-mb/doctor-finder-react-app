import Item from './Item';
import React from 'react';
import logo from '../../assets/images/footerlogo.png'

const Top = ({data}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            <div className='xl:ml-5'>
                <img alt='logo' src={logo} className='mb-7'/>
                <p className='font-medium text-sm leading-6'>با توجه به تنظیمات مرکز درمانی، ممکن است که دریافت نوبت فقط در یک بازه زمانی مشخص مانند “فقط از ساعت 8 الی 10 صبح” و یا فقط “روزهای شنبه” مقدور باشد. در این حالت، در پیغام خطا، برای شما نوشته می شود که چه ساعتی باید برای دریافت نوبت به وبسایت مراجعه نمایید.</p>
            </div>
            {data.map(item => 
            <Item key={item.id} {...item} />
            )}
        </div>
    );
};

export default Top;