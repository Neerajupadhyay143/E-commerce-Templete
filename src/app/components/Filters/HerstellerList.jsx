import React, { useState } from 'react';
import { Checkbox } from '@mui/material';
import { styled } from '@mui/system';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

// Custom styles for Checkbox
const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    color: '#62C3C6',
    '&.Mui-checked': {
        color: '#62C3C6',
    },
    '& .MuiSvgIcon-root': {
        fontSize: '20px',
    }
}));

// Button with border animation
const CustomButton = styled('button')({
    width: '100%',
    height: '33px',
    padding: '7px 20px 8px 20px',
    gap: '10px',
    borderRadius: '24px 0px 24px 0px',
    border: '2px solid #ECFEAA',
    backgroundColor: 'transparent',
    color: '#045A5C',
    fontSize: '14px',
    fontWeight: 'bold',
    transition: 'border-color 0.3s ease',
    '&:hover': {
        borderColor: '#62C3C6',
    },
});

function HerstellerList() {
    const [isOpen, setIsOpen] = useState(true);  // State to track if the list is open

    const toggleList = () => {
        setIsOpen(!isOpen);  // Toggle the state
    };

    return (
        <div className="w-full max-w-[250px] h-auto pb-[30px] flex flex-col gap-[20px] border-b-[1px]">
            <div className="relative w-full flex items-center cursor-pointer" onClick={toggleList}>
                <h3 className="w-full text-center text-[#365758] font-sora text-[18px] font-semibold leading-[22.68px]">
                    Hersteller
                </h3>
                <div className="absolute right-0">
                    {isOpen ? (
                        <ExpandLess style={{ color: '#62C3C6', fontSize: '20px' }} />
                    ) : (
                        <ExpandMore style={{ color: '#62C3C6', fontSize: '20px' }} />
                    )}
                </div>
            </div>

            {isOpen && (
                <div className="w-full h-auto flex flex-col gap-[16px]">
                    <div className="flex items-center">
                        <CustomCheckbox />
                        <span>ADREXpharma</span>
                    </div>
                    <div className="flex items-center">
                        <CustomCheckbox />
                        <span>Aurora</span>
                    </div>
                    <div className="flex items-center">
                        <CustomCheckbox />
                        <span>Avaay</span>
                    </div>
                    <div className="flex items-center">
                        <CustomCheckbox />
                        <span>Bedrocan</span>
                    </div>
                    <div className="flex items-center">
                        <CustomCheckbox />
                        <span>Cannamedical</span>
                    </div>
                </div>
            )}

            {isOpen && (
                <CustomButton>
                    mehr anzeigen
                </CustomButton>
            )}
        </div>
    );
}

export default HerstellerList;
