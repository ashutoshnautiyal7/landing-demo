import Image from "next/image";
import React from "react";
import { MdDoubleArrow } from "react-icons/md";

const ServiceCard = ({ imageSrc, title, services }) => {
  return (
    <div className="border-[#2B7B67] border-[10px] rounded-2xl w-full max-w-[850px] shadow-xl flex flex-col justify-between">
      <div className="p-10 flex gap-10 justify-center md:justify-start items-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <Image src={imageSrc} width={100} height={100} />
          <h3 className="text-[20px] leading-[30px] font-semibold text-center">
            {title}
          </h3>
          <button className="px-4 py-2 text-white bg-[#2B7B67] rounded-3xl w-[9rem]">
            Enquire Now
          </button>
        </div>
        <div className="hidden md:flex">
          <ul className="text-[20px] leading-[30px] font-semibold list-disc">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mb-3.5 mr-6 hidden md:flex gap-2 justify-end font-semibold items-center">
        Read more <MdDoubleArrow />
      </div>
    </div>
  );
};

export default ServiceCard;
