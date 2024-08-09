import Image from "next/image";
import React from "react";

const TestimonialList = ({ testimonial }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={"/Images/arrow.png"}
        width={100}
        height={100}
        className="md:w-[100px] md:h-[100px] w-[70px] h-[70px]"
        alt={testimonial.name}
      />
      <p className="mt-7 text-[20px] leading-[30px]">{testimonial.text}</p>
      <h4 className="text-[24px] text-[#2B7B67] mt-6 font-bold">
        {testimonial.name}
      </h4>
    </div>
  );
};

export default TestimonialList;
