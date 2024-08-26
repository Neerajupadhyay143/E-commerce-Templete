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
function PriceRangeSlider() {
    const min = 5;
    const max = 10;
    const mid = (min + max) / 2;  // Calculate the midpoint

    const [value, setValue] = useState([mid - 1, mid + 1]);  // Center the range around the midpoint

    return (
        <div className="w-full max-w-[250px] h-[125px] pb-[30px] flex flex-col items-center border-b-[1px]">
            <h3 className="w-full h-[23px] text-center text-[#365758] font-sora text-[18px] font-semibold leading-[22.68px]">
                Preis
            </h3>

            <div className="w-full mt-[20px] flex justify-center">
                <CustomSlider
                    value={value}
                    onChange={(event, newValue) => setValue(newValue)}  // Update value on change
                    min={min}
                    max={max}
                    step={0.1}
                    valueLabelDisplay="auto"
                />
            </div>

            <div className="w-full h-[24px] flex gap-[4px] justify-between">
                <div className="flex justify-center items-center w-[48%] h-full bg-[#819191]/10 rounded-l-full px-[10px]">
                    5 €
                </div>-
                <div className="flex justify-center items-center w-[48%] h-full bg-[#819191]/10 rounded-r-full px-3 py-1">
                    10 €
                </div>
            </div>
        </div>
    
    );
}

export default PriceRangeSlider;
