import React from 'react';
import PriceRangeSlider from './PriceRangeSlider';
import HerstellerList from './Filters/HerstellerList';
import THCGehalt from './Filters/THCGehalt';
import CBDGehalt from './Filters/CBDGehalt';
import Genetik from './Filters/Genetik';
import Bestrahltung from './Filters/Bestrahltung';
import Terpene from './Filters/Terpene';
import CloseIcon from '@mui/icons-material/Close';

function Filter({ isMobile, toggleDrawer }) {
    return (
        <div className={`${isMobile ? 'p-4' : 'p-6 bg-white shadow-md rounded-lg'}`}>
            <div className=' bg-[#62C3C6]/10 '>
                <h2 className=" text-xl text-center text-[#045A5C] font-semibold mb-4">Filter</h2>
            </div>

            <div className='space-y-5'>
                {/* Filter Sections */}
                <div>
                    <PriceRangeSlider />
                </div>
                <div className="mb-4">

                    {/* Add filter options here */}
                    <HerstellerList />
                </div>

                <div>
                    <THCGehalt />
                </div>
                <div>
                    <CBDGehalt />
                </div>
                <div>
                    <Genetik />
                </div>
                <div>
                    <Bestrahltung />
                </div>
                <div>
                    <Terpene />
                </div>

                <div className=' flex flex-col items-center text-center mt-12 space-x-1'>
                    <p> <span><CloseIcon sx={{ color: '#28E3E9', height: '19px', width: '19px' }} /></span>alle Filter zurücksetzen</p>
                </div>
            </div>
            {/* More filter sections */}
            {isMobile && (
                <button
                    className="bg-[#62C3C6] text-white px-4 py-2 rounded-lg w-full mt-4"
                    onClick={toggleDrawer}
                >
                    Apply Filters
                </button>
            )}
        </div>
    );
}

export default Filter;
