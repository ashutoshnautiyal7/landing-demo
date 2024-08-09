import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-[32px] py-[12px] border-b-[#2B7B67] border-b-2 sticky top-0 bg-white shadow-md z-50">
      <Image src={"/Images/logo.png"} width={120} height={120} />
      <div className="hidden lg:flex gap-8 ">
        <span className="font-medium text-[#2B7B67]">Home</span>
        <span className="font-medium">Who Are We</span>
        <span className="font-medium">Services</span>
        <span className="font-medium">Why Us</span>
        <span className="font-medium">Testimonials</span>
        <span className="font-medium">Contact Us</span>
      </div>
    </div>
  );
};

export default Navbar;
