import Image from "next/image";
import HeaderDesktop from "./components/HeaderDesktop";
import SecondHeader from "./components/SecondHeader";
import ThirdHeader from "./components/ThirdHeader";

import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Main content container */}
        <div className="flex-grow p-9 transition ease-in-out">
          <div>
            <HeaderDesktop />
          </div>
          <div className="md:-mt-12">
            <SecondHeader />
          </div>
          <div className="mt-24 md:mb-10 md:-mt-12 md:p-12">
            <ThirdHeader />
          </div>
          <div>
            <ProductPage />
          </div>
        </div>

        {/* Footer container */}

        <div className="flex flex-col min-h-screen  ">
          {/* Your other components go here */}
          <div className="flex-grow">
            {/* Main content */}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
