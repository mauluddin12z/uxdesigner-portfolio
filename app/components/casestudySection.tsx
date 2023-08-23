"use client";
import React from "react";
import Image, { ImageLoader } from "next/image";
import Link from "next/link";
import SkeletonLoading from "./skeletonLoading";
import URLGenerator from "../utils/URLGenerator";
import { useInView } from "react-intersection-observer";

export default function CaseStudy() {
  const myLoader: ImageLoader = ({ src }) => {
    return process.env.NEXT_PUBLIC_FRONTEND_URL + src;
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const projects = [
    {
      id: 1,
      project_name: "Store Finder Web Responsive Design",
      imageUrl: "/images/caseStudy/storefinder/storefindercover.png",
    },
  ];

  return (
    <div className="xl:max-w-7xl lg:max-w-6xl md:max-w-6xl mx-auto p-2 lg:p-0">
      <div ref={ref} className="flex flex-col">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          {projects ? (
            projects?.map((projects: any) => (
              <Link
                href={`casestudy/${URLGenerator(projects.project_name)}`}
                key={projects?.id}
                className={`w-full p-2 border border-gray-200 rounded-lg shadow bg-white relative overflow-hidden transition-all duration-700 ease-in-out ${
                  inView ? "transition-on" : "transition-off"
                }`}
              >
                <div className="absolute w-full h-full inset-0 z-10 flex justify-center items-center hover:backdrop-blur-sm bg-black/0 hover:bg-black/60 text-white/0 hover:text-white transition-colors duration-300">
                  <div className="text-[24px] font-semibold w-60 text-center">
                    {projects.project_name}
                  </div>
                </div>
                <Image
                  src={projects?.imageUrl}
                  loader={myLoader}
                  width={1000}
                  height={1000}
                  alt="storeFinder"
                  className="object-contain h-full rounded-lg"
                />
              </Link>
            ))
          ) : (
            <div className="w-full h-[290px] p-2 border border-gray-200 rounded-lg shadow bg-white relative overflow-hidden">
              <SkeletonLoading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
