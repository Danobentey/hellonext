"use client";
import { useState } from "react";
import ICONS from "../images/icons";

export default function Button({ title, ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-[fit-content] flex items-center gap-4 rounded-full cursor-pointer"
        {...props}
      >
        <span className=" text-white text-xl text-center bg-gray-800 hover:bg-gray-900 transition-all delay-100 p-5 inline-block rounded-full">
          {title || "Secure your spot"}
        </span>
        <span className=" w-[60px] relative p-[10px] h-[60px]  block rounded-full bg-gradient-to-br from-[#84c85c] to-[#d5cd1e] overflow-hidden">
        <img className={`w-[40px] absolute  ${isHovered ?'left-[10px]':'left-[-50px]'} duration-[400ms]`} src={ICONS.arrow_right.src} alt="arr" />
          <img className={`w-[40px] absolute  ${isHovered ? 'top-[-30px] right-[-40px]':'top-[10px] right-[8px] '} duration-[400ms]`} src={ICONS.arrow_skew.src} alt="arr" />
        </span>
      </div>
    </div>
  );
}
