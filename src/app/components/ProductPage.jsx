"use client";
import React, { useState } from 'react';

import { Drawer } from '@mui/material';

import Filter from './Filter';
import ProductCard from './Filters/ProductCard';
import PaginationCart from './Pagination/PaginationCart';
import { useRef } from 'react';
import Footer from './Footer';

const products = [
    {
        id: 1,
        name: "Cannabis Flos 18/1 PT Mango",
        brand: "Canify",
        imageSrc: "/assets/images/medicens.png",
        thc: 18,
        cbd: "<1",
        cultivar: "Mango",
        genetics: "Hybrid",
        price: "11,66",
        isAvailable: false,
    },
    {
        id: 2,
        name: "Cannabis Flos 22/1 PT Lemon",
        brand: "Canify",
        imageSrc: "/assets/images/medicens.png",
        thc: 22,
        cbd: "<1",
        cultivar: "Lemon",
        genetics: "Sativa",
        price: "12,50",
        isAvailable: false,
    },
    {
        id: 3,
        name: "Cannabis Flos 22/1 PT Lemon",
        brand: "Canify",
        imageSrc: "/assets/images/medicens.png",
        thc: 22,
        cbd: "<1",
        cultivar: "Lemon",
        genetics: "Sativa",
        price: "12,50",
        isAvailable: false,
    },
    {
        id: 4,
        name: "Cannabis Flos 22/1 PT Lemon",
        brand: "Canify",
        imageSrc: "/assets/images/medicens.png",
        thc: 22,
        cbd: "<1",
        cultivar: "Lemon",
        genetics: "Sativa",
        price: "12,50",
        isAvailable: true,
    },
    {
        id: 5,
        name: "Cannabis Flos 22/1 PT Lemon",
        brand: "Canify",
        imageSrc: "/assets/images/medicens.png",
        thc: 22,
        cbd: "<1",
        cultivar: "Lemon",
        genetics: "Sativa",
        price: "12,50",
        isAvailable: true,
    },
    {
        id: 6,
        name: "Cannabis Flos 22/1 PT Lemon",
        brand: "Canify",
        imageSrc: "/assets/images/medicens.png",
        thc: 22,
        cbd: "<1",
        cultivar: "Lemon",
        genetics: "Sativa",
        price: "12,50",
        isAvailable: true,
    },
    {
        id: 7,
        name: "Cannabis Flos 22/1 PT Lemon",
        brand: "Canify",
        imageSrc: "/assets/images/medicens.png",
        thc: 22,
        cbd: "<1",
        cultivar: "Lemon",
        genetics: "Sativa",
        price: "12,50",
        isAvailable: false,
    },
    {
        id: 8,
        name: "Cannabis Flos 22/1 PT Lemon",
        brand: "Canify",
        imageSrc: "/assets/images/medicens.png",
        thc: 22,
        cbd: "<1",
        cultivar: "Lemon",
        genetics: "Sativa",
        price: "12,50",
        isAvailable: false,
    },
    {
        id: 9,
        name: "Cannabis Flos 22/1 PT Lemon",
        brand: "Canify",
        imageSrc: "/assets/images/medicens.png",
        thc: 22,
        cbd: "<1",
        cultivar: "Lemon",
        genetics: "Sativa",
        price: "12,50",
        isAvailable: false,
    },

    // Add more products here
];

function ProductPage() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const sliderRef = useRef(null);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const scroll = (direction) => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: direction === 'left' ? -300 : 300,
                behavior: 'smooth'
            });
        }
    };


    return (
        <>
            <div className="flex flex-col md:flex-row">
                {/* Filter Sidebar */}
                <div className="hidden md:block md:w-1/4 p-4">
                    <Filter isMobile={false} />
                </div>

                {/* Drawer for mobile filter */}
                <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                    <Filter isMobile={true} toggleDrawer={toggleDrawer} />
                </Drawer>

                {/* Products Grid */}

                <div className="relative w-full h-[calc(80vh)] md:h-[calc(200vh)] md:w-3/4 p-4 overflow-y-auto scrollbar-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                <div className=" hidden md:block absolute bottom-[-175%] right-12 p-4">
                    <PaginationCart />
                </div>




                {/* Button to open drawer on mobile */}
                <button
                    className="md:hidden fixed bottom-4 right-4 bg-[#62C3C6] text-white p-4 rounded-full shadow-lg"
                    onClick={toggleDrawer}
                >
                    Filters
                </button>


            </div>

            <div>

            </div>
        </>

    );
}

export default ProductPage;
