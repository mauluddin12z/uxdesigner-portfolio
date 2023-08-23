"use client";
import React, { useCallback, useState } from "react";
import Link from "next/link";

export default function FooterSection() {
  const navLink = [
    {
      name: "About",
      link: "/",
    },
    {
      name: "Case Study",
      link: "/casestudy",
    },
  ];
  const socialMedia = [
    {
      icon: "facebook",
      link: "https://www.facebook.com/hidayat.mauludin",
    },
    {
      icon: "instagram",
      link: "https://www.instagram.com/dayatmauluddin/",
    },
    {
      icon: "linkedin",
      link: "https://www.linkedin.com/in/dayat-mauludin-15726b15b/",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto flex lg:items-center">
      <div className="flex flex-col justify-between p-20 gap-8 w-full items-center">
        <ul className="flex lg:flex-row flex-col lg:gap-[40px] gap-[30px]">
          {navLink?.map((navLink, index) => (
            <li key={index}>
              <Link
                href={navLink.link}
                className="block text-gray-800 text-center hover:text-primary-100 text-[16px] font-medium"
                aria-current="page"
              >
                {navLink.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-x-3">
          {socialMedia?.map((socialMedia: any, index: any) => (
            <div key={index}>
              <Link
                href={socialMedia.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-primary-100 transition-all duration-100 text-[28px]"
              >
                <i className={`fa-brands fa-${socialMedia.icon}`}></i>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-accent-4 text-center dark:text-dark-accent-4 text-[14px]">
          © Copyright {new Date().getFullYear()} by Hidayat Mauluddin
        </div>
      </div>
    </div>
  );
}
