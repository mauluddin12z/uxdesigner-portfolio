import React from "react";

export default function projectOverviewSection() {
  return (
    <>
      <div className="text-[18px] text-justify text-[#66666]">
        <span className="text-primary-100 font-bold">StoreFinder </span>is a
        website specifically designed to assist users in finding stores based on
        their location. This site provides information about various stores with
        a wide range of product options and makes it easy for users to discover
        stores that match their needs.
      </div>
      <div className="flex flex-col">
        <div className="font-bold text-[18px] text-primary-100">
          Project Duration:
        </div>
        <div className="text-[18px] text-[#66666]">
          16 August 2023 to 19 August 2023
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
          <div className="flex flex-col">
            <div className="text-[24px] font-bold text-primary-100 flex items-center gap-5 mb-5">
              <div className="w-10 flex justify-center items-center aspect-square border-2 border-primary-100 rounded-full">
                <i className="fa-solid fa-exclamation"></i>
              </div>
              Problem
            </div>
            <div className="text-justify text-[#66666]">
              The increasing complexity of urban areas and the mobility of
              modern society have created new challenges in finding and
              accessing various physical stores around users. Currently, users
              often have to rely on internet searches that are often inaccurate
              or not comprehensive. In situations like this, StoreFinder comes
              as a solution to provide a more efficient and practical store
              search experience.
            </div>
          </div>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
          <div className="flex flex-col">
            <div className="text-[24px] font-bold text-primary-100 flex items-center gap-5 mb-5">
              <div className="w-10 flex justify-center items-center aspect-square border-2 border-primary-100 rounded-full">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              Goals
            </div>
            <div className="text-justify text-[#66666]">
              Delivering Store Search Convenience: The primary goal of the
              StoreFinder project is to provide users with an easy, quick, and
              efficient store search experience for those who want to find
              stores around them.
            </div>
          </div>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
          <div className="flex flex-col">
            <div className="text-[24px] font-bold text-primary-100 flex items-center gap-5 mb-5">
              <div className="w-10 flex justify-center items-center aspect-square border-2 border-primary-100 rounded-full">
                <i className="fa-solid fa-user"></i>
              </div>
              My Role
            </div>
            <div className="text-justify text-[#66666]">As UX Designer</div>
          </div>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
          <div className="flex flex-col">
            <div className="text-[24px] font-bold text-primary-100 flex items-center gap-5 mb-5">
              <div className="w-10 flex justify-center items-center aspect-square border-2 border-primary-100 rounded-full">
                <i className="fa-solid fa-list"></i>
              </div>
              Responsibilities
            </div>
            <div className="text-justify text-[#66666]">
              Conducting interviews, creating digital wireframes, developing
              prototypes in low and high fidelity, conducting usability studies,
              paying attention to accessibility aspects, and iteratively
              developing responsive designs.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
