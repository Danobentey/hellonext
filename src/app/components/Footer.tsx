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
    <div className="mt-96 flex flex-col gap-4 sm:flex-row sm:justify-between">
      <div className="">
        <img src="" alt="" />
        <Button title="Join the Waiting List" />
      </div>

      <div className="flex gap-4 justify-between sm:justify-normal mt-12 pr-12">
        <nav className="flex flex-col">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current() ? "page" : undefined}
              className={classNames(
                item.current()
                  ? "underline p-50 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "rounded-md px-3 py-2 text-sm font-medium"
              )}
              onClick={() => setActive(item.name)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-4">
          <p className="flex place-items-center gap-1">
            <img src={ICONS.linkedin.src} alt="linkedin" />
            LinkedIn
          </p>
          <p className="flex place-items-center gap-1">
            <img src={ICONS.fb.src} alt="fb" />
            Facebook
          </p>
          <p className="flex place-items-center gap-1">
            <img src={ICONS.insta.src} alt="insta" />
            Instagram
          </p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
