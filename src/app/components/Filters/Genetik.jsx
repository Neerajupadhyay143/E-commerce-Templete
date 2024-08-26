import React from 'react';

function Genetik() {
    return (
        <div className="w-full max-w-[250px] h-[125px] pb-[30px] flex flex-col justify-center items-center border-b-[1px]">
            <h3 className="w-full h-[23px] text-center text-[#365758] font-sora text-[18px] font-semibold leading-[22.68px]">
                Genetik
            </h3>

            <div className="w-full mt-9 flex justify-center">
                <div className="flex flex-wrap gap-2 w-full max-w-[250px] justify-center">
                    <button className='text-white bg-[#62C3C6] p-2 rounded'>Indica</button>
                    <button className='bg-[#62C3C6]/30 text-[#045A5C] p-2 rounded'>Sativa</button>
                    <button className='bg-[#62C3C6]/30 text-[#045A5C] p-2 rounded'>Hybrid</button>
                </div>
            </div>
        </div>
    );
}

export default Genetik;
