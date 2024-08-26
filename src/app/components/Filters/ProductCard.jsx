"use client";
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

const ProductCard = ({ product }) => {


    return (
        <div className="p-4"> {/* Added padding to the container */}
            <div className="w-full max-w-[310px] h-auto gap-3 rounded-[30px_0px_30px_0px] overflow-hidden border-[2px] border-[#28E3E9] transition-all ease-in-out delay-150">
                {/* Availability Label */}
                <div className="w-full h-auto p-[20px_20px_0px_20px]">
                    {product.isAvailable ? (
                        <>
                            <div className='flex  justify-between'>
                                <p className="flex items-center text-[#0D7052] bg-[#0D7052]/5 w-28 text-nowrap p-[3px_12px] rounded-full text-[12px] font-[300] leading-[15.12px] tracking-[0.01em]">
                                    <span className='z-1 mr-1'>
                                        <img src="/assets/images/Ellipse2.png" alt="Availability Icon" width={12} height={24} />
                                    </span>
                                    sofort lieferbar
                                </p>
                                <p className="flex items-center text-[#0D7052] bg-[#0D7052]/5  text-nowrap p-[3px_12px] rounded-full text-[12px] font-[300] leading-[15.12px] tracking-[0.01em]">
                                   
                                    Neu
                                </p>
                            </div>
                        </>

                    ) : (
                        <p className="flex items-center text-[#A10C0C] bg-[#A10C0C]/5 w-28 text-nowrap p-[3px_12px] rounded-full text-[12px] font-[300] leading-[15.12px] tracking-[0.01em]">
                            <span className='z-1 mr-1 '>
                                <img src="/assets/images/Ellipse 1.png" alt="Availability Icon" />
                            </span>
                            nicht lieferbar
                        </p>
                    )}
                </div>

                {/* Product Image */}
                <div className="w-full h-[150px]">
                    <Image
                        src="/assets/images/medicens.png"
                        alt="Product Image"
                        width={310}
                        height={150}
                        className="object-cover"
                    />
                </div>

                {/* Product Body */}
                <div className="bg-[#62C3C6]/30 rounded-b-[0px]">
                    <div className="w-full h-auto p-[24px_0px_0px_0px]">
                        <div className="flex flex-col items-start p-4 gap-4">
                            <p className="px-2 rounded font-sora text-[#365758] font-medium text-sm bg-[#62C3C6]/30 -mt-6">Canify</p>
                            <div className="flex flex-row justify-between items-center w-full">
                                {/* Center the THC and CBD buttons */}
                                <div className="flex flex-row items-center justify-center space-x-4 mx-auto">
                                    <p className="font-sora font-medium text-xs py-1 rounded px-3 text-[#365758] bg-[#FCFCFA]">THC 18%</p>
                                    <p className="px-4 py-1 rounded font-sora text-[#365758] bg-[#62C3C6] font-medium text-xs">CBD &lt;1%</p>
                                </div>
                                {/* Align the group image to the right */}
                                <div className="flex items-center">
                                    <div className="bg-[#EEF7F7] p-1 rounded-full">
                                        <Image
                                            src="/assets/images/Group.png"
                                            alt="Check Icon"
                                            width={20}
                                            height={20}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div style={{ fontSize: '18px' }}>
                                    <p className="font-sora text-[#365758] font-semibold">
                                        Cannabis Flos 18/1 PT Mango
                                    </p>
                                </div>
                                <div className='flex items-center mt-2 justify-between'>
                                    <p className="font-sora text-[#365758]">Kultivar: </p>
                                    <span><img src="/assets/images/Line 1.png" alt="Divider" /></span>
                                    <p className="font-sora text-[#365758]">Mango</p>
                                </div>
                                <div className='flex items-center mt-2 justify-between'>
                                    <p className="font-sora text-[#365758]">Genetik: </p>
                                    <span><img src="/assets/images/Line 1.png" alt="Divider" /></span>
                                    <p className="font-sora text-[#365758]">Hybrid</p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full space-y-4 md:space-y-0">
                                <div className='flex flex-col'>
                                    <p className="font-sora text-[#116A6C] text-2xl font-bold">
                                        <span className='text-[#62C3C6]'>€</span> 11,66<sup className="text-xs">1</sup>
                                    </p>
                                    <span className='text-[#365758] font-light text-xs'>pro Gramm</span>
                                </div>

                                <button className="text-sm text-nowrap bg-[#ECFEAA] text-[#116A6C] py-[8px] px-[18px] gap-[10px] rounded-[24px_0px_24px_0px] transition-transform duration-300 ease-in-out transform hover:scale-105 w-full md:w-[164px] h-[33px]">
                                    in den Warenkorb
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
