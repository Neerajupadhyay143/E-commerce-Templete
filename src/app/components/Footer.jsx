import React from 'react';

function Footer() {
    return (
        <footer className=" inset-x-0 bottom-0 bg-[#1A8D91] shadow-[0px_0px_20px_rgba(7,64,64,0.05)] rounded-t-[30px] p-6 lg:p-12 flex flex-col lg:flex-row lg:justify-between items-start lg:items-center space-y-6 lg:space-y-0">

            {/* Left Links */}
            <div className="flex flex-row md:flex-col gap-3 w-full lg:w-auto">
                <a href="#" className="text-sm font-light text-white/50">AGB</a>
                <a href="#" className="text-sm font-light text-white/50">Impressum</a>
                <a href="#" className="text-sm font-light text-white/50">Datenschutz</a>
            </div>

            {/* Points */}
            <div className="flex flex-row md:flex-col lg:flex-col gap-6 w-full lg:w-auto">
                <div className="flex flex-col gap-6 lg:flex-row lg:gap-6">
                    <div className="flex items-center gap-2">
                        <div ><img src="/assets/images/Rectangle.png" alt="" width={10} height={16} /></div>
                        <span className="text-base font-normal text-white">Rezept einlösen</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div ><img src="/assets/images/Rectangle.png" alt="" width={10} height={16} /></div>
                        <span className="text-base font-normal text-white">Live Bestand</span>
                    </div>
                </div>
                <div className="flex flex-col gap-6 lg:flex-row lg:gap-6">
                    <div className="flex items-center gap-2">
                        <div ><img src="/assets/images/Rectangle.png" alt="" width={10} height={16} /></div>
                        <span className="text-base font-normal text-white">Videosprechstunde</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div ><img src="/assets/images/Rectangle.png" alt="" width={10} height={16} /></div>
                        <span className="text-base font-normal text-white">FAQs</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div ><img src="/assets/images/Rectangle.png" alt="" width={10} height={16} /></div>
                        <span className="text-base font-normal text-white">Kontakt</span>
                    </div>
                </div>
            </div>

            {/* Address */}
            <div className='flex flex-row  space-x-2 md:space-x-10 lg:space-x-10'>
                <div className="flex flex-col    text-nowrap gap-3 w-full lg:w-auto">
                    <span className="text-sm font-light text-white/50">Standort</span>
                    <p className="md:text-base text-xs font-extrabold text-white">
                        Bergstraße 49 - 57<br />
                        69469 Weinheim<br />
                        (3 Glocken Quartier)
                    </p>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-3 w-full lg:w-auto">
                    <span className="text-sm font-light text-white/50">Telefon</span>
                    <p className=" md:text-base  text-xs font-extrabold text-white">0223 545 5250</p>
                </div>

                {/* Schedule */}
                <div className="flex flex-col gap-3 w-full lg:w-auto">
                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-light text-white/50">Mo-Fr</span>
                        <span className="md:text-base text-xs font-extrabold text-white">09:00 – 18:00 Uhr</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-light text-white/50">Sa</span>
                        <span className=" md:text-base text-xs font-extrabold text-white">09:00 – 14:00 Uhr</span>
                    </div>
                </div>

            </div>

        </footer>
    );
}

export default Footer;
