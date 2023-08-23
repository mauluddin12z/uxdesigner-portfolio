import React from "react";
import Image from "next/image";
import sitemapImg from "@/public/images/caseStudy/storefinder/SITEMAP.png";

export default function sitemapSection() {
  return (
    <div className="flex flex-col">
      <div className="text-[24px] font-bold text-primary-100">Sitemap:</div>
      <div className="mt-4 flex w-full justify-center items-center">
        <Image
          src={sitemapImg}
          width={1000}
          height={1000}
          alt="sitemap"
          className="h-full object-contain"
        />
      </div>
    </div>
  );
}
