"use client"
import { useState } from 'react';
import ICONS from '../images/icons';

export default function Button({title}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-[fit-content] flex items-center gap-4 rounded-full"
        >
          <span className="text-xl bg-gray-800 p-5 inline-block rounded-full">{title || "Secure your spot"}</span>
          {isHovered ? (
            <img src={ICONS.arrow_right.src} alt="arr" />
          ) : (
            <img src={ICONS.arrow_skew.src} alt="arr" />
          )}
        </div>
    </>
  );
}
