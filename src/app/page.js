import Image from "next/image";
import HeaderDesktop from "./components/HeaderDesktop";
import SecondHeader from "./components/SecondHeader";
import ThirdHeader from "./components/ThirdHeader";

import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Main container that defines the layout of the page */}
      <div className="flex flex-col min-h-screen">

        {/* Main content section */}
        <div className="flex-grow transition ease-in-out">

          {/* HeaderDesktop component wrapped with padding */}
          <div className="p-9">
            <HeaderDesktop />
          </div>

          {/* SecondHeader component with negative top margin for adjustment */}
          <div className="md:-mt-12">
            <SecondHeader />
          </div>

          {/* ThirdHeader component with margin adjustments for proper spacing */}
          <div className="mt-24 md:mb-10 md:-mt-12 md:p-12">
            <ThirdHeader />
          </div>

          {/* ProductPage component, rendering the product-related content */}
          <div>
            <ProductPage />
          </div>
        </div>

        {/* Footer section */}
        <div className="flex flex-col min-h-screen">

          {/* Placeholder for other components if needed */}
          <div className="flex-grow">
            {/* Main content */}
          </div>

          {/* Footer component */}
          <Footer />
        </div>
      </div>
    </>
  );
}
