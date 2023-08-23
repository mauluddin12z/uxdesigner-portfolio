"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Pasfoto from "@/public/images/pasfoto.png";
import PlusSymbol from "@/public/images/plusSymbol.svg";
import RectangleDotFill from "@/public/images/rectangleDotFill.svg";
import StripeCircle from "@/public/images/stripeCircle.svg";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
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

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="lg:block hidden absolute w-[400px] h-[400px] bg-primary-10 rounded-full top-0 left-0 translate-x-[-50%] translate-y-[-50%] blur-3xl"></div>
      <div className="lg:block hidden absolute w-[400px] h-[400px] bg-primary-10 rounded-full bottom-0 right-0 translate-x-[50%] translate-y-[50%] blur-3xl"></div>
      <div
        ref={ref}
        className={`xl:max-w-7xl lg:max-w-6xl md:max-w-6xl mx-auto transition-all duration-700 ease-in-out ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col lg:flex-row z-10 w-full justify-center items-center pt-[100px] min-h-screen p-4">
          <div className="flex lg:w-6/12 w-full items-center relative order-2 lg:order-1">
            <div className="absolute -top-40">
              <div className="w-[90px] h-[90px] absolute border-primary-100 border-2 translate-x-6 translate-y-6 shadow-[0px_0px_4px] shadow-primary-100 lg:block hidden"></div>
              <div className="w-[90px] h-[90px] absolute border-primary-100 border-2 shadow-[0px_0px_4px] shadow-primary-100 lg:block hidden"></div>
            </div>
            <div className="absolute w-[90px] h-[90px] border-gray-700 border-2 -top-28 -right-10 rounded-full border-dashed lg:block hidden"></div>
            <div className="flex flex-col leading-tight">
              <div className="font-semibold lg:text-[58px] text-[42px] mb-5 text-gray-800">
                Halo, I am
                <br />
                <div className="text-primary-100">Hidayat Mauluddin</div>
              </div>
              <div className="text-[16px] text-gray-800 z-20 lg:w-10/12 w-full mb-10 text-justify">
                I am a dedicated UX Designer with a strong focus on delivering
                exceptional user experiences. I specialize in crafting intuitive
                and visually captivating designs. Proficient in industry-leading
                tools like Adobe XD and Figma, I am always enthusiastic about
                blending aesthetics seamlessly with functionality in every
                project. If you are in need of a UX Designer, I am here to bring
                your vision to life and create an extraordinary user experience.
              </div>
              <div className="flex gap-x-6 items-center">
                <Link
                  href={"https://wa.me/6281369982678"}
                  target="_blank"
                  className="w-[120px] h-[40px] flex justify-center items-center text-white bg-primary-100 hover:bg-primary-120 focus:ring-4 focus:ring-primary-40  font-medium rounded-lg text-sm shadow-[0px_0px_12px] shadow-primary-60 transition-all duration-100"
                >
                  Contact Me
                </Link>
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
              </div>
            </div>
          </div>
          <div className="flex lg:w-6/12 w-full items-center justify-center order-1 lg:order-2">
            <div className="w-full h-full p-10">
              <div className="w-full h-auto aspect-square flex items-center justify-center bg-gray-100 shadow-[0px_0px_10px] shadow-gray-100/20 rounded-full relative">
                <Image
                  src={Pasfoto}
                  alt="pasfoto"
                  className="h-full w-auto z-10"
                  priority={true}
                />
                <div className="absolute lg:bottom-32 lg:left lg:w-[150px] bottom-16 left-0 w-[100px] h-auto">
                  <RectangleDotFill />
                </div>
                <div className="absolute lg:top-24 lg:right-24 lg:w-[180px] top-11 right-11 w-[100px] h-auto">
                  <StripeCircle />
                </div>
                <div className="absolute lg:top-24 lg:left-14 lg:w-[25px] top-10 left-14 w-[15px] h-auto">
                  <PlusSymbol />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
