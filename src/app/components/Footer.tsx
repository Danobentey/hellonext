"use client";
import React, { useState } from "react";
import Button from "./Button";
import ICONS from "../images/icons";

const Footer = () => {
  const [active, setActive] = useState("Dashboard");

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  const navigation = [
    {
      name: "Program",
      href: "#",
      current: function () {
        return active === this.name;
      },
    },
    {
      name: "About",
      href: "#",
      current: function () {
        return active === this.name;
      },
    },
    {
      name: "Contacts",
      href: "#",
      current: function () {
        return active === this.name;
      },
    },
    // {
    //   name: "Testimonials",
    //   href: "#",
    //   current: function () {
    //     return active === this.name;
    //   },
    // },
  ];

  return (
    <div className="mt-[-59px] w-[101%] ml-[-10px] p-[20px] rounded-tr-[15px] rounded-tl-[15px] h-[300px]flex flex-col gap-4 sm:flex-row sm:justify-between bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#d5cd1e] from-5% to-black to-90%">
      <div className="ml-12 mt-12">
        <img src="" alt="" />
        <Button  title="Join the Waiting List" />
      </div>

      <div className="flex gap-4  justify-between sm:justify-around mt-[-70px] ml-[40%] pr-12 pt-6 pb-12">
        <nav className="ml-[6%] flex  h-full flex-col">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current() ? "page" : undefined}
              className={classNames(
                item.current()
                  ? " underline text-[50px] m-[20px] text-white"
                  : "text-[50px] p-[20px] text-gray-300 hover:text-[60px]",
                "rounded-md text-sm font-medium"
              )}
              onClick={() => setActive(item.name)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-4 mt-[20px]">
          <p className="text-white text-[18px]">Contact us </p>
          <p className="flex text-[15px] text-white place-items-center gap-1 hover:bg-gray-700 hover:text-white">
            <img src={ICONS.linkedin.src} alt="linkedin" className="h-[20px]" />
            LinkedIn
          </p>
          <p className="flex text-[15px] text-white place-items-center gap-1 hover:bg-gray-700 hover:text-white">
            <img src={ICONS.fb.src} alt="fb" className="h-[20px]" />
            Facebook
          </p>
          <p className="flex text-[15px] text-white place-items-center gap-1 hover:bg-gray-700 hover:text-white">
            <img src={ICONS.insta.src} alt="insta" className="h-[30px]" />
            Instagram
          </p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
