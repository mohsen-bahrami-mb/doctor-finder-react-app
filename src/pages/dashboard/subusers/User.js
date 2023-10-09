import { FiEdit2 } from 'react-icons/fi';
import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';

const User = () => {
    return (
        <div className="flex flex-col p-3 border bg-slate-50 rounded-md lg:flex-row md:justify-between md:items-center gap-10">
                <div>
                    <h3 className="text-slate-800 text-lg font-medium mb-2">علی اکبری</h3>
                    <div className="flex items-center gap-7 text-slate-600">
                        <span>شماره موبایل: 09149689984</span>
                        <span>کد ملی: 2840172437</span>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="flex cursor-pointer hover:opacity-80 duration-200 items-center gap-2 text-blue font-medium border-blue-600 py-1 px-4 border rounded-md">
                        <FiEdit2 />
                        <span>ویرایش</span>
                    </div>
                    <div className="flex cursor-pointer hover:opacity-80 duration-200 items-center gap-2 text-red-600 font-medium border-red-600 py-1 px-4 border rounded-md">
                        <RiDeleteBinLine />
                        <span>حذف</span>
                    </div>
                </div>
            </div>
    );
};

export default User;