"use client";
import React from 'react';

import ListIcon from '@mui/icons-material/List';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { Fullscreen } from '@mui/icons-material';
import zIndex from '@mui/material/styles/zIndex';

function ThirdHeader() {

    const CustomSwitch = styled(Switch)({
        width: 25,
        height: 12,
        padding: 0,
        gap: 0,

        '& .MuiSwitch-switchBase': {
            padding: 0,
            zIndex: 1,
            top: 1,
            left: 1,
            color: "rgba(98, 195, 198, 0.3)",
            '&.Mui-checked': {
                transform: 'translateX(12px)',
            },
            '& .MuiSwitch-thumb': {
                width: 10,
                color: "rgba(98, 195, 198, 1)",
                height: 10,
                gap: 0,
            },
        },
        '& .MuiSwitch-track': {

            color: "rgba(98, 195, 198, 0.3)",   
        },
    });

    return (
        <div className="flex flex-col md:flex-row items-center p-1 space-y-4 md:space-y-0">
            <div className="flex flex-1 space-x-3 items-center justify-center md:justify-start">
                <img
                    src="/assets/images/Rectangle.png"
                    alt="Rectangle"
                    width="20px"
                    height="26px"
                    className=""
                />
                <img src="/assets/images/B.png" alt="Blüten" />
            </div>
            <div className="flex flex-col md:flex-row md:flex-1 md:justify-between space-y-4 md:space-y-0 md:space-x-5 items-center w-full">
                <div className="search-bar flex items-center border justify-between max-w-full w-full md:w-96 rounded-full bg-[#EEF7F7] transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-[#e0f4f4]">
                    <input
                        type="text"
                        placeholder="Suchen"
                        className="placeholder-custom-placeholder bg-transparent outline-none py-1 pr-4 pl-4 w-full text-[#62C3C6]"
                    />
                    <div className="mr-2">
                        <img src="/assets/images/Search.png" alt="search" />
                    </div>
                </div>

                <div className="hidden md:flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 items-center text-nowrap w-full sm:w-auto">
                    <div className="flex space-x-1 bg-[#62C3C6] py-1 px-3 rounded w-full sm:w-auto transition-transform duration-500 ease-in-out transform hover:scale-105">
                        <p className="text-[#365758]">Sortieren nach</p>
                        <select name="" id="" className="bg-[#62C3C6] outline-none">
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                    <div className="flex flex-row items-center space-x-1 bg-[#62C3C6] py-1 px-3 rounded w-full sm:w-auto transition-transform duration-500 ease-in-out transform hover:scale-105">
                        <p className="text-[#365758]">Verfügbarkeit</p>
                        <CustomSwitch defaultChecked />
                    </div>
                    <div className="flex justify-center items-center bg-[#62C3C6] py-1 px-3 rounded transition-transform duration-500 ease-in-out transform hover:scale-105">
                        <ListIcon sx={{ color: "#365758" }} />
                    </div>
                </div>

                {/* Grid layout and menu hiding for mobile */}
                <div className="grid grid-cols-2 gap-2 w-full md:hidden">
                    <div className="flex space-x-1 bg-[#62C3C6] py-1 px-3 rounded transition-transform duration-500 ease-in-out transform hover:scale-105">
                        <p className="text-[#365758] text-nowrap">Sortieren nach</p>
                        <select name="" id="" className="bg-[#62C3C6] outline-none">
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                    <div className="flex flex-row items-center space-x-1 bg-[#62C3C6] py-1 px-3 rounded w-full sm:w-auto transition-transform duration-500 ease-in-out transform hover:scale-105">
                        <p className="text-[#365758]">Verfügbarkeit</p>
                        <CustomSwitch defaultChecked />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThirdHeader;
