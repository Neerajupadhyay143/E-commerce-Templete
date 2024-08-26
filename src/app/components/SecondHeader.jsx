"use client"; // This directive indicates that the component is a client-side component.

import React, { useState } from 'react'; // Importing React and the useState hook.
import Image from 'next/image'; // Importing Next.js's optimized Image component.

const SecondHeader = () => {
    // State to track the currently active button. Defaults to 'Cannabis Blüten'.
    const [activeButton, setActiveButton] = useState('Cannabis Blüten');

    // Function to handle button click and set the active button.
    const handleClick = (label) => {
        setActiveButton(label);
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2 mt-6 mx-auto w-full h-auto gap-4 md:gap-5 md:p-12">
            {/* Button group */}
            <div className="flex items-center space-x-4 md:space-x-6">
                {/* Home button */}
                <button
                    className="relative text-[14px] md:text-[16px] font-sora leading-[18px] md:leading-[20.16px] transition-all duration-300 ease-in-out"
                    onClick={() => handleClick('Home')}
                >
                    <span
                        className={`absolute inset-0 transition-transform duration-300 ease-in-out
                            ${activeButton === 'Home' ? 'scale-x-100' : 'scale-x-0'}
                            origin-left`}
                    ></span>
                    <span className={`relative z-10 ${activeButton === 'Home' ? 'text-[#045A5C]' : 'text-[#62C3C6]'}`}>
                        Home
                    </span>
                </button>

                {/* Arrow icon between buttons, visible only on medium screens and larger */}
                <Image
                    src="/assets/images/aero.png"
                    alt="aero"
                    width={20}
                    height={9.69}
                    className="hidden md:block"
                />

                {/* Livebestand button */}
                <button
                    className="relative text-[14px] md:text-[16px] font-sora leading-[18px] md:leading-[20.16px] transition-all duration-300 ease-in-out"
                    onClick={() => handleClick('Livebestand')}
                >
                    <span
                        className={`absolute inset-0 transition-transform duration-300 ease-in-out
                            ${activeButton === 'Livebestand' ? 'scale-x-100' : 'scale-x-0'}
                            origin-left`}
                    ></span>
                    <span className={`relative z-10 ${activeButton === 'Livebestand' ? 'text-[#045A5C]' : 'text-[#62C3C6]'}`}>
                        Livebestand
                    </span>
                </button>

                {/* Arrow icon between buttons */}
                <Image
                    src="/assets/images/aero.png"
                    alt="aero"
                    width={20}
                    height={9.69}
                    className="hidden md:block"
                />

                {/* Cannabis Blüten button */}
                <button
                    className="relative text-[14px] md:text-[16px] font-sora leading-[18px] md:leading-[20.16px] transition-all duration-300 ease-in-out"
                    onClick={() => handleClick('Cannabis Blüten')}
                >
                    <span
                        className={`absolute inset-0 transition-transform duration-300 ease-in-out
                            ${activeButton === 'Cannabis Blüten' ? 'scale-x-100' : 'scale-x-0'}
                            origin-left`}
                    ></span>
                    <span className={`relative z-10 ${activeButton === 'Cannabis Blüten' ? 'text-[#045A5C]' : 'text-[#62C3C6]'}`}>
                        Cannabis Blüten
                    </span>
                </button>
            </div>

            {/* Section with GKV text and Preisoptionen button */}
            <div className="flex flex-col items-center space-y-3 md:space-y-3 md:flex-col md:space-x-4">
                {/* GKV information */}
                <p className="text-[#365758] font-sora text-[12px] md:text-[14px] leading-[16px] md:leading-[17.64px] text-center">
                    GKV mit Kostenübernahme?
                </p>

                {/* Preisoptionen button */}
                <button className="bg-transparent border-2 border-[#62C3C6] rounded-[24px_0_24px_0] px-4 py-2 text-[#045A5C] font-sora text-[12px] md:text-[14px] leading-[16px] md:leading-[17.64px] hover:scale-105 transition ease-in-out">
                    Preisoptionen
                </button>
            </div>
        </div>
    );
};

export default SecondHeader; // Exporting the component for use in other parts of the application.
