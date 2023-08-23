"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import DesktopViewMockup from "@/public/images/caseStudy/storefinder/desktopViewMockup.png";
import ProjectOverviewSection from "./projectOverviewSection";
import PersonaSection from "./personaSection";
import PrototypeSection from "./prototypeSection";

export default function Page() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`xl:max-w-7xl lg:max-w-6xl md:max-w-6xl mx-auto transition-all duration-700 ease-in-out ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col gap-10">
        <div className="w-full h-[500px] bg bg-gradient-to-tr from-primary-100 to-primary-40 mt-[150px] rounded-lg flex">
          <div className="flex flex-col justify-center items-center h-full p-20 w-full">
            <div className="text-[28px] font-semibold text-white text-center mb-4">
              STORE FINDER RESPONSIVE WEB DESIGN
            </div>
            <div className="text-[24px] text-white">UX CASE STUDY</div>
          </div>
          <div className="relative w-full h-full drop-shadow-[0px_0px_5px_rgba(0,0,5,0.2)]">
            <Image
              src={DesktopViewMockup}
              width={500}
              height={500}
              alt="image"
              className="object-contain h-full"
            />
          </div>
        </div>
        <ProjectOverviewSection />
        <PersonaSection />
        <PrototypeSection />
      </div>
    </div>
  );
}
