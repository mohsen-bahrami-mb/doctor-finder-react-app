import Bottom from '../footer/Bottom';
import React from 'react';
import Top from '../footer/Top';
import { getFooterLinks } from '../../utils/data';

const Footer = () => {
    const data = getFooterLinks();
    return (
        <div className='section bg-[#15558D] text-white'>
            <Top data={data} />
            <hr className='border border-slate-500 my-7'/>
            <Bottom />
        </div>
    );
};

export default Footer;