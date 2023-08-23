import React from "react";
import Image from "next/image";
import personaImg from "@/public/images/caseStudy/storefinder/PERSONA.png";

export default function personaSection() {
  return (
    <div className="flex flex-col">
      <div className="text-[24px] text-primary-100 font-bold">Persona</div>
      <div className="mt-4 flex w-full justify-center">
        <Image
          src={personaImg}
          width={1000}
          height={1000}
          alt="sitemap"
          className="h-full object-contain"
        />
      </div>
    </div>
  );
}
