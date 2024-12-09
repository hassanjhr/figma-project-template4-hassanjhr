"use client";


import React from "react";
import Link from "next/link";
import Image from "next/image";
import sponsorsImage from "@/app/assets/sponsors.png";
import OrderCompleted from "../components/ordercompleted";




const OrderCompletedPage = () => {
    return (
    
            <div className="bg-[#F6F7FB]">
      {/* Bb Section */}
      <div className="bg-[#F6F7FB] py-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-xl font-bold text-[#151875] mb-2">Shop Grid Default</h2>
          <div className="text-sm text-[#151875]">
            <Link href="/" className="hover:text-[#FB2E86] hover:underline">
              Home
            </Link>
            <span className="mx-2 text-[#B7BACB]">•</span>
            <span>Pages</span>
            <span className="mx-2 text-[#B7BACB]">•</span>
            <span className="text-[#FB2E86]">Shop</span>
          </div>
        </div>
      </div>

      
{/*  */}
      {/* Shop Section */}

  
      {/* <Shop/> */}
      <OrderCompleted/>


      
{/*  */}
      {/* Sponsors Section */}
      <div className="bg-white py-10 flex justify-center">
        <Image src={sponsorsImage} alt="Sponsors" className="max-w-[80%] md:max-w-[60%]" />
      </div>
    </div>


    
    )
}

export default OrderCompletedPage;