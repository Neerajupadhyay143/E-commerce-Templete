"use client";
import React from 'react';
import { Slider } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';

// Custom Styled Slider
const CustomSlider = styled(Slider)(({ theme }) => ({
    width: '250px',  // Slider width
    color: '#62C3C6',

    '& .MuiSlider-thumb': {
        width: '15.38px',
        height: '20px',
        backgroundColor: '#62C3C6',
        borderRadius: '15.38px 0px 15.38px 0px',
    },
    '& .MuiSlider-track': {
        height: '7px',
        borderRadius: '10px 0px 0px 0px',
    },
    '& .MuiSlider-rail': {
        height: '7px',
        borderRadius: '10px 0px 0px 0px',
        backgroundColor: '#62C3C6',
    },
}));

function CBDGehalt() {

    const min = 5;
    const max = 10;
    const [value, setValue] = useState([(min / max) * 100, (max / max) * 100]);  // Initialize with percentage values

    const minPercentage = (min / max) * 100;
    const maxPercentage = (max / max) * 100;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="w-full max-w-[250px] h-[125px] pb-[30px] flex flex-col items-center border-b-[1px]">
            <h3 className="w-full h-[23px] text-center text-[#365758] font-sora text-[18px] font-semibold leading-[22.68px]">
                CBD Gehalt
            </h3>
            <div className="w-full mt-[20px] flex justify-center">
                <CustomSlider
                    value={value}
                    onChange={handleChange}
                    min={minPercentage}
                    max={maxPercentage}
                    step={0.1}
                    valueLabelDisplay="auto"
                />
            </div>
            <div className="w-full h-[24px] flex gap-[4px] justify-between">
                <div className="flex justify-center items-center w-[48%] h-full bg-[#819191]/10 rounded-l-full px-[10px]">
                    {minPercentage.toFixed(0)} %
                </div>
                <div className="flex justify-center items-center w-[48%] h-full bg-[#819191]/10 rounded-r-full px-3 py-1">
                    {maxPercentage.toFixed(0)} %
                </div>
            </div>
        </div>
    );
}

export default CBDGehalt;
