"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const navigation = [
  {
    name: "Membership",
    href: "/membership",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Courses",
    href: "/products",
  },
];

const NavItems = () => {
  const currentPath = usePathname();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }


  return (
    <div className="sm:ml-6 sm:block">
      <div className=" flex space-x-4">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            aria-current={item.href === currentPath ? "page" : undefined}
            className={classNames(
              currentPath === item.href
                ? "p-5 inline-block text-white bg-black"
                : "text-gray-900 hover:bg-gray-700 hover:text-white",
              "rounded-md px-3 py-2 text-sm font-medium"
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavItems;
