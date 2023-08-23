import Link from "next/link";
import React from "react";

export default function prototypeSection() {
  return (
    <div className="flex flex-col">
      <div className="text-[24px] font-bold text-primary-100">Prototype:</div>
      <div className="mt-4">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.figma.com/proto/YEkmrskYOi9isZLJQLU5XS/HIGH-FIDELITY---DESAIN-WEBSITE-STORE-FINDER?type=design&node-id=329-4963&t=ecLdWvZBYxLq4otr-1&scaling=min-zoom&page-id=275%3A300&starting-point-node-id=329%3A4963&mode=design"
          className="text-white bg-primary-100 hover:bg-primary-120 focus:ring-4 focus:ring-primary-40 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          See Prototype
        </Link>
      </div>
    </div>
  );
}
