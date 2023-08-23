"use client";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import Logo from "@/public/images/logo.svg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function HeaderSection() {
  const navItemMenu = [
    {
      name: "About",
      link: "/",
    },
    {
      name: "Case Study",
      link: "/casestudy",
    },
  ];

  const pathname = usePathname();

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuVisible((prev) => !prev);
  }, []);

  useEffect(() => {
    if (menuVisible) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [menuVisible]);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = typeof window !== "undefined" ? window.pageYOffset : 0;
      const threshold = 50;
      position > threshold ? setScrolled(true) : setScrolled(false);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <nav
      className={`w-full h-[100px] z-50 flex justify-center items-center transition-transform duration-200 ease-in-out ${
        scrolled
          ? "shadow-[0px_0px_10px] shadow-black/20 border-b border-gray-100 fixed -top-[100px] translate-y-[100px] bg-white"
          : "lg:absolute fixed top-0 border-transparent lg:bg-transparent bg-white"
      }`}
    >
      <div className="xl:max-w-7xl lg:max-w-6xl md:max-w-6xl w-full flex items-center justify-between mx-auto lg:py-6 py-4 px-8 lg:px-4">
        <Link href={"/"} className="flex items-center gap-x-3">
          <Logo className="w-[40px] h-[40px]" />
          <span className="font-bold text-[20px] text-black lg:block hidden">
            MHM.
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          className={`text-primary-100 text-[18px] block p-2 ${
            menuVisible ? "hidden" : "block lg:hidden"
          }`}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div
          className={`w-full lg:w-auto ${
            menuVisible
              ? "block h-screen fixed inset-0 bg-white"
              : "hidden lg:block"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="text-primary-100 text-[24px] p-2 lg:hidden top-5 right-5 absolute"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <ul
            className={`font-medium lg:flex-row flex-col flex items-center gap-3 h-full justify-center`}
          >
            {navItemMenu?.map?.((navItem: any, index: number) => (
              <li key={index}>
                <Link
                  onClick={() => setMenuVisible(false)}
                  href={navItem.link}
                  className={`text-black hover:text-primary-100 hover:bg-secondary-color font-medium transition-all px-4 py-3 ${
                    "/" + pathname.split("/")[1] == navItem.link
                      ? "text-primary-100"
                      : "text-black"
                  }`}
                >
                  {navItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
