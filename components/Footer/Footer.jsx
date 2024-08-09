import Image from "next/image";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMail, IoCall } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1E1E1E] text-white px-[32px] lg:px-[8rem] py-[3.5rem]">
        <h2 className="text-[32px] md:text-[48px] font-semibold text-center">
          Contact US
        </h2>
        <div className="mt-12 flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="lg:w-1/2  bg-gray-500 rounded-md flex items-center justify-center">
            {" "}
            map{" "}
          </div>
          <div className="flex gap-5 flex-col">
            <div className="flex gap-4 md:gap-6 items-start ">
              <FaMapMarkerAlt className="w-[1.5rem] md:w-[2rem] h-[1.5rem] md:h-[2rem] mt-2" />
              <span className="font-medium">
                <p className="text-[24px] ">Our Office Address</p>
                <p className="mt-1.5">
                  Rajiv Nagar, Banda road, near gurudwara, Powayan -(242401),
                  Shahjahanpur,(U.P)
                </p>
              </span>
            </div>
            <div className="flex gap-4 md:gap-6 items-start ">
              <IoMail className="w-[1.5rem] md:w-[2rem] h-[1.5rem] md:h-[2rem] mt-2" />
              <span className="font-medium">
                <p className="text-[24px] ">General Enquiries</p>
                <p className="mt-1.5">info@arbc.com</p>
              </span>
            </div>
            <div className="flex gap-4 md:gap-6 items-start ">
              <IoCall className="w-[1.5rem] md:w-[2rem] h-[1.5rem] md:h-[2rem] mt-2" />
              <span className="font-medium">
                <p className="text-[24px] ">Call Us </p>
                <p className="mt-1.5">+91 7409595532</p>
              </span>
            </div>
            <div className="flex gap-3">
              <Image src={"/Images/linked-in.png"} width={40} height={40} />
              <Image src={"/Images/fb.png"} width={40} height={40} />
              <Image src={"/Images/ig.png"} width={40} height={40} />
              <Image src={"/Images/google.png"} width={40} height={40} />
              <Image src={"/Images/whattsapp.png"} width={40} height={40} />
            </div>
            <div className="flex flex-col md:flex-row gap-3.5 md:gap-2 mt-2 md:items-center">
              <span className="flex gap-2">
                {Array(5)
                  .fill(0)
                  .map((index) => (
                    <FaStar
                      key={index}
                      className="text-[#F1C644] w-[1.5rem] md:w-[2rem] h-[1.5rem] md:h-[2rem]"
                    />
                  ))}
              </span>

              <p className="text-[20px] md:ml-5">on Google Reviews</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#282A2A] text-[#FFFFFF] py-3 md:py-6 px-[32px] lg:px-[8rem] text-[14px] md:text-[20px] leading-[28px] md:leading-[30px] flex text-center items-center justify-center">
        A RAI BHARDWAJ & CO. All rights reserved © 2024
      </div>
    </>
  );
};

export default Footer;
