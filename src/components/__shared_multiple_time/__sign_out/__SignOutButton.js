import React from 'react';
import { HiOutlineArrowLongLeft } from 'react-icons/hi2';

const SignOutButton = () => {
    return (
        <div>
            <button type="button" className="py-2 px-4 max-w-md flex justify-center items-center gap-x-4 bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                <HiOutlineArrowLongLeft />
                Sign Out
            </button>
        </div>
    );
};

export default SignOutButton;