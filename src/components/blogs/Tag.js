import React from 'react';

const Tag = ({label, sidebar}) => {
    return (
        <span className={`${sidebar ? ' text-gray-600 hover:text-[#09E5B0]' : 'hover:bg-[#09E5B0] bg-slate-50 text-gray-500 hover:text-white'} duration-200 text-sm font-medium px-4 pt-2 pb-3 cursor-pointer border rounded-md border-gray-300`}>{label}</span>
    );
};

export default Tag;