"use client";
import { useState } from "react";

const NavItems = () => {
  const [active, setActive] = useState("Dashboard");

  function classNames(...classes) {
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
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
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
      </div>
    </div>
  );
};

export default NavItems;
