"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem, IconButton } from '@mui/material';
import "../globals.css";

function HeaderDesktop() {
    const [activePage, setActivePage] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleButtonClick = (page) => {
        setActivePage(page);
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='flex flex-col items-center space-x-7 space-y-7 -mt-6 md:mt-1 md:p-12 lg:p-12 transition-all ease-in-out'>
            <div className='flex flex-row items-center justify-between w-full'>
                <div className='search-bar flex flex-grow-1 border justify-between max-w-96 w-96 rounded-full bg-[#EEF7F7] items-center'>
                    <input type="text" placeholder='Suchen' className='placeholder-custom-placeholder bg-transparent outline-none pt-1 pb-2 pr-4 pl-4 w-full text-[#62C3C6]' />
                    <div className='mr-2'>
                        <img src="/assets/images/Search.png" alt="search" />
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className='flex space-x-10 hidden sm:flex md:flex text-nowrap'>
                    <div className='flex items-center space-x-1 cursor-pointer transition-transform duration-300 transform hover:scale-110' onClick={() => handleButtonClick('bestellprozess')}>
                        <Image
                            src={activePage === 'bestellprozess' ? "/assets/images/Rectangle.png" : "/assets/images/Rectangler-dim.png"}
                            alt="status"
                            width={10}
                            height={16}
                        />
                        <div>
                            <img src="/assets/images/Bestellprozess.png" alt="" />
                        </div>
                    </div>

                    <div className='flex items-center space-x-1 cursor-pointer transition-transform duration-300 transform hover:scale-110' onClick={() => handleButtonClick('liveBestand')}>
                        <Image
                            src={activePage === 'liveBestand' ? "/assets/images/Rectangle.png" : "/assets/images/Rectangler-dim.png"}
                            alt="status"
                            width={10}
                            height={16}
                        />
                        <p className='font-sans text-[#045A5C]'>Live Bestand</p>
                    </div>

                    <div className='flex items-center space-x-1 cursor-pointer transition-transform duration-300 transform hover:scale-110' onClick={() => handleButtonClick('videosprechstunde')}>
                        <Image
                            src={activePage === 'videosprechstunde' ? "/assets/images/Rectangle.png" : "/assets/images/Rectangler-dim.png"}
                            alt="status"
                            width={10}
                            height={16}
                        />
                        <p className='font-sans text-[#045A5C]'>Videosprechstunde</p>
                    </div>

                    <div className='flex items-center space-x-1 cursor-pointer transition-transform duration-300 transform hover:scale-110' onClick={() => handleButtonClick('FQA')}>
                        <Image
                            src={activePage === 'FQA' ? "/assets/images/Rectangle.png" : "/assets/images/Rectangler-dim.png"}
                            alt="status"
                            width={10}
                            height={16}
                        />
                        <p className='font-sans text-[#045A5C]'>FAQs</p>
                    </div>

                    <div className='flex items-center space-x-1 cursor-pointer transition-transform duration-300 transform hover:scale-110' onClick={() => handleButtonClick('kontakt')}>
                        <Image
                            src={activePage === 'kontakt' ? "/assets/images/Rectangle.png" : "/assets/images/Rectangler-dim.png"}
                            alt="status"
                            width={10}
                            height={16}
                        />
                        <p className='font-sans text-[#045A5C]'>Kontakt</p>
                    </div>
                </div>

                {/* Right Side Icons and Menu */}
                <div className='flex items-center space-x-10'>
                    <div className='flex items-center -mr-9 md:mr-0 space-x-1 cursor-pointer transition-transform duration-300 transform hover:scale-110'>
                        <img src="/assets/images/Vector.png" alt="dim" className='w-14 md:w-6 m-1' />
                    </div>

                    <div className='h-8 hidden md:flex '>
                        <button className="Headerbutton md:pt-[7px] md:pr-[18px] md:pb-[8px] md:pl-[18px] bg-[#ECFEAA] text-[#045A5C] border-2 border-transparent outline-none hover:border-[#ffef5b] hover:animate-borderAnimation transition-all duration-300 hover:scale-105 transition-transform p-2">
                            Anmelden
                        </button>
                    </div>

                    

                    {/* Mobile Menu */}
                    <div className='flex sm:hidden items-center space-x-2'>
                        <IconButton onClick={handleMenuOpen}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={() => { handleButtonClick('bestellprozess'); handleMenuClose(); }}>
                                <img className='mr-2' src="/assets/images/Rectangler-dim.png" alt="status" width={10} height={16} />
                                Bestellprozess
                            </MenuItem>
                            <MenuItem onClick={() => { handleButtonClick('liveBestand'); handleMenuClose(); }}>
                                <img className='mr-2' src="/assets/images/Rectangler-dim.png" alt="status" width={10} height={16} />
                                Live Bestand
                            </MenuItem>
                            <MenuItem onClick={() => { handleButtonClick('videosprechstunde'); handleMenuClose(); }}>
                                <img className='mr-2' src="/assets/images/Rectangler-dim.png" alt="status" width={10} height={16} />
                                Videosprechstunde
                            </MenuItem>
                            <MenuItem onClick={() => { handleButtonClick('FQA'); handleMenuClose(); }}>
                                <img className='mr-2' src="/assets/images/Rectangler-dim.png" alt="status" width={10} height={16} />
                                FAQs
                            </MenuItem>
                            <MenuItem onClick={() => { handleButtonClick('kontakt'); handleMenuClose(); }}>
                                <img className='mr-2' src="/assets/images/Rectangler-dim.png" alt="status" width={10} height={16} />
                                Kontakt
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderDesktop;
